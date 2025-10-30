import { useState } from "react";
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Calculator, TrendingUp, Home, DollarSign } from "lucide-react";

type LifestyleAnswers = {
  [key: string]: boolean | null;
};

type FinancialData = {
  monthlyIncome: number;
  monthlyRent: number;
  propertyPrice: number;
  monthlyLoanPayment: number;
  annualOwnershipCost: number;
  monthlyRentalIncome: number;
  initialCapital: number;
  monthlyPassiveIncome: number;
};

export default function Tools() {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  // Step 1: Lifestyle answers
  const [lifestyleAnswers, setLifestyleAnswers] = useState<LifestyleAnswers>({
    q1: null, q2: null, q3: null, q4: null, q5: null,
    q6: null, q7: null, q8: null, q9: null, q10: null,
  });

  // Step 2: Financial data
  const [financialData, setFinancialData] = useState<FinancialData>({
    monthlyIncome: 0,
    monthlyRent: 0,
    propertyPrice: 0,
    monthlyLoanPayment: 0,
    annualOwnershipCost: 0,
    monthlyRentalIncome: 0,
    initialCapital: 0,
    monthlyPassiveIncome: 0,
  });

  const handleLifestyleAnswer = (question: string, answer: boolean) => {
    setLifestyleAnswers(prev => ({ ...prev, [question]: answer }));
  };

  const handleFinancialChange = (field: keyof FinancialData, value: string) => {
    setFinancialData(prev => ({ ...prev, [field]: parseFloat(value) || 0 }));
  };

  const calculateLifestyleScore = () => {
    const yesCount = Object.values(lifestyleAnswers).filter(a => a === true).length;
    if (yesCount >= 7) return 'buying';
    if (yesCount <= 3) return 'renting';
    return 'neutral';
  };

  const calculateIndicators = () => {
    const monthlyOwnershipCost = financialData.monthlyLoanPayment + (financialData.annualOwnershipCost / 12);
    const costComparison = monthlyOwnershipCost - financialData.monthlyRent;
    const buyingIncomePercent = (monthlyOwnershipCost / financialData.monthlyIncome) * 100;
    const rentingIncomePercent = (financialData.monthlyRent / financialData.monthlyIncome) * 100;
    const rentalProfit = financialData.monthlyRentalIncome - monthlyOwnershipCost;
    const priceToRent = financialData.propertyPrice / (financialData.monthlyRentalIncome * 12);

    return {
      monthlyOwnershipCost,
      costComparison,
      buyingIncomePercent,
      rentingIncomePercent,
      rentalProfit,
      priceToRent,
    };
  };

  const calculateConclusions = () => {
    const indicators = calculateIndicators();
    const annualReturn = (financialData.monthlyRentalIncome * 12 / financialData.propertyPrice) * 100;
    const investmentProjection = financialData.initialCapital * Math.pow(1.15, 10);
    
    return {
      rentalProfitConclusion: indicators.rentalProfit > 0 ? 'profit' : indicators.rentalProfit < 0 ? 'loss' : 'breakeven',
      rentalProfitAmount: Math.abs(indicators.rentalProfit),
      annualReturn,
      priceToRentRecommendation: indicators.priceToRent < 15 ? 'buying' : indicators.priceToRent > 20 ? 'renting' : 'neutral',
      priceToRentRatio: indicators.priceToRent,
      investmentProjection,
      initialCapital: financialData.initialCapital,
    };
  };

  const canProceedStep1 = Object.values(lifestyleAnswers).every(a => a !== null);
  const canProceedStep2 = financialData.monthlyIncome > 0 && financialData.propertyPrice > 0;

  const renderStep1 = () => {
    const questions = Array.from({ length: 10 }, (_, i) => `lifestyle_q${i + 1}`);
    
    return (
      <div className="space-y-6 animate-fade-in">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <Home className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold mb-2">{t('step1Title')}</h2>
          <p className="text-muted-foreground">{t('step1Subtitle')}</p>
        </div>

        <div className="space-y-4">
          {questions.map((q, index) => (
            <Card key={q} className="p-6 border-border/50 hover:shadow-md transition-all duration-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <p className="font-medium text-sm md:text-base">
                    <span className="text-primary mr-2">{index + 1}.</span>
                    {t(q)}
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button
                    variant={lifestyleAnswers[`q${index + 1}`] === true ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleLifestyleAnswer(`q${index + 1}`, true)}
                    className="min-w-[80px]"
                  >
                    {t('yes')}
                  </Button>
                  <Button
                    variant={lifestyleAnswers[`q${index + 1}`] === false ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleLifestyleAnswer(`q${index + 1}`, false)}
                    className="min-w-[80px]"
                  >
                    {t('no')}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {canProceedStep1 && (
          <Card className="p-6 bg-accent/50 border-primary/20 animate-fade-in">
            <h3 className="font-semibold text-lg mb-2">{t('lifestyleConclusion')}</h3>
            <p className="text-muted-foreground">
              {t(calculateLifestyleScore() === 'buying' ? 'lifestyleScoreBuying' : 
                 calculateLifestyleScore() === 'renting' ? 'lifestyleScoreRenting' : 
                 'lifestyleScoreNeutral')}
            </p>
          </Card>
        )}
      </div>
    );
  };

  const renderStep2 = () => {
    const fields: Array<{ key: keyof FinancialData; label: string }> = [
      { key: 'monthlyIncome', label: 'financial_q1' },
      { key: 'monthlyRent', label: 'financial_q2' },
      { key: 'propertyPrice', label: 'financial_q3' },
      { key: 'monthlyLoanPayment', label: 'financial_q4' },
      { key: 'annualOwnershipCost', label: 'financial_q5' },
      { key: 'monthlyRentalIncome', label: 'financial_q6' },
      { key: 'initialCapital', label: 'financial_q7' },
      { key: 'monthlyPassiveIncome', label: 'financial_q8' },
    ];

    return (
      <div className="space-y-6 animate-fade-in">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <DollarSign className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold mb-2">{t('step2Title')}</h2>
          <p className="text-muted-foreground">{t('step2Subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {fields.map((field, index) => (
            <Card key={field.key} className="p-6 border-border/50 hover:shadow-md transition-all duration-200">
              <Label htmlFor={field.key} className="text-sm font-medium mb-3 block">
                <span className="text-primary mr-2">{index + 1}.</span>
                {t(field.label)}
              </Label>
              <Input
                id={field.key}
                type="number"
                min="0"
                step="0.01"
                value={financialData[field.key] || ''}
                onChange={(e) => handleFinancialChange(field.key, e.target.value)}
                placeholder="0.00"
                className="text-lg"
              />
            </Card>
          ))}
        </div>
      </div>
    );
  };

  const renderStep3 = () => {
    const indicators = calculateIndicators();
    const indicatorList = [
      { title: 'indicator_1_title', desc: 'indicator_1_desc', value: `€${indicators.monthlyOwnershipCost.toFixed(2)}` },
      { title: 'indicator_2_title', desc: 'indicator_2_desc', value: `€${indicators.costComparison.toFixed(2)}`, color: indicators.costComparison < 0 ? 'text-green-600' : 'text-orange-600' },
      { title: 'indicator_3_title', desc: 'indicator_3_desc', value: `${indicators.buyingIncomePercent.toFixed(1)}%`, color: indicators.buyingIncomePercent > 40 ? 'text-red-600' : 'text-green-600' },
      { title: 'indicator_4_title', desc: 'indicator_4_desc', value: `${indicators.rentingIncomePercent.toFixed(1)}%`, color: indicators.rentingIncomePercent > 40 ? 'text-red-600' : 'text-green-600' },
      { title: 'indicator_5_title', desc: 'indicator_5_desc', value: `€${indicators.rentalProfit.toFixed(2)}`, color: indicators.rentalProfit > 0 ? 'text-green-600' : 'text-red-600' },
      { title: 'indicator_6_title', desc: 'indicator_6_desc', value: indicators.priceToRent.toFixed(2), color: indicators.priceToRent < 15 ? 'text-green-600' : indicators.priceToRent > 20 ? 'text-red-600' : 'text-orange-600' },
    ];

    return (
      <div className="space-y-6 animate-fade-in">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <Calculator className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold mb-2">{t('step3Title')}</h2>
          <p className="text-muted-foreground">{t('step3Subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {indicatorList.map((indicator, index) => (
            <Card key={index} className="p-6 border-border/50 hover:shadow-md transition-all duration-200">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-base flex-1">{t(indicator.title)}</h3>
                <span className={`text-2xl font-bold ${indicator.color || 'text-foreground'}`}>
                  {indicator.value}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{t(indicator.desc)}</p>
            </Card>
          ))}
        </div>
      </div>
    );
  };

  const renderStep4 = () => {
    const conclusions = calculateConclusions();

    return (
      <div className="space-y-6 animate-fade-in">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <TrendingUp className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold mb-2">{t('step4Title')}</h2>
          <p className="text-muted-foreground">{t('step4Subtitle')}</p>
        </div>

        <div className="space-y-6">
          <Card className="p-6 border-border/50">
            <h3 className="font-semibold text-lg mb-3">{t('conclusion_1_title')}</h3>
            <p className={`text-xl font-bold ${conclusions.rentalProfitConclusion === 'profit' ? 'text-green-600' : 'text-red-600'}`}>
              {t(conclusions.rentalProfitConclusion === 'profit' ? 'profitAnswer' : 
                 conclusions.rentalProfitConclusion === 'loss' ? 'lossAnswer' : 'breakEvenAnswer')
                .replace('{amount}', conclusions.rentalProfitAmount.toFixed(2))}
            </p>
          </Card>

          <Card className="p-6 border-border/50">
            <h3 className="font-semibold text-lg mb-3">{t('conclusion_2_title')}</h3>
            <p className="text-xl font-bold text-primary">
              {t('returnRate').replace('{rate}', conclusions.annualReturn.toFixed(2))}
            </p>
          </Card>

          <Card className="p-6 border-border/50">
            <h3 className="font-semibold text-lg mb-3">{t('conclusion_3_title')}</h3>
            <p className="text-xl font-bold">
              {t('priceToRentConclusion')
                .replace('{ratio}', conclusions.priceToRentRatio.toFixed(2))
                .replace('{recommendation}', t(conclusions.priceToRentRecommendation === 'buying' ? 'priceToRentFavorBuying' : 
                                                 conclusions.priceToRentRecommendation === 'renting' ? 'priceToRentFavorRenting' : 'priceToRentNeutral'))}
            </p>
          </Card>

          <Card className="p-6 border-border/50">
            <h3 className="font-semibold text-lg mb-3">{t('conclusion_4_title')}</h3>
            <p className="text-xl font-bold text-primary">
              {t('investmentProjection')
                .replace('{amount}', conclusions.investmentProjection.toFixed(0))
                .replace('{initial}', conclusions.initialCapital.toFixed(0))}
            </p>
          </Card>

          <Card className="p-6 bg-primary/10 border-primary/30">
            <h3 className="font-bold text-lg mb-2 text-primary">{t('financialIndependenceRule')}</h3>
            <p className="text-foreground font-medium">{t('financialIndependenceRuleText')}</p>
          </Card>

          <div className="flex justify-center pt-4">
            <Button 
              onClick={() => {
                setCurrentStep(1);
                setLifestyleAnswers({ q1: null, q2: null, q3: null, q4: null, q5: null, q6: null, q7: null, q8: null, q9: null, q10: null });
                setFinancialData({ monthlyIncome: 0, monthlyRent: 0, propertyPrice: 0, monthlyLoanPayment: 0, annualOwnershipCost: 0, monthlyRentalIncome: 0, initialCapital: 0, monthlyPassiveIncome: 0 });
              }}
              variant="outline"
              size="lg"
            >
              {t('startOver')}
            </Button>
          </div>
        </div>
      </div>
    );
  };

  const canProceed = () => {
    if (currentStep === 1) return canProceedStep1;
    if (currentStep === 2) return canProceedStep2;
    return true;
  };

  return (
    <>
      <Helmet>
        <title>{t('buyVsRentCalculator')} | Proper Land</title>
        <meta name="description" content={t('buyVsRentCalculatorDescription')} />
        <meta name="keywords" content="buy vs rent calculator, real estate calculator, property calculator, home buying calculator" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1 pt-24 pb-16">
          <div className="container mx-auto px-6 max-w-5xl">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                {t('buyVsRentTitle')}
              </h1>
              <p className="text-lg text-muted-foreground mb-2">{t('buyVsRentSubtitle')}</p>
              <p className="text-sm text-muted-foreground italic">{t('disclaimer')}</p>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-medium">
                  {t('stepProgress').replace('{current}', String(currentStep)).replace('{total}', String(totalSteps))}
                </span>
                <span className="text-sm text-muted-foreground">
                  {Math.round((currentStep / totalSteps) * 100)}%
                </span>
              </div>
              <Progress value={(currentStep / totalSteps) * 100} className="h-2" />
            </div>

            {/* Step Content */}
            <div className="mb-8">
              {currentStep === 1 && renderStep1()}
              {currentStep === 2 && renderStep2()}
              {currentStep === 3 && renderStep3()}
              {currentStep === 4 && renderStep4()}
            </div>

            {/* Navigation Buttons */}
            {currentStep < totalSteps && (
              <div className="flex justify-between items-center gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
                  disabled={currentStep === 1}
                >
                  {t('previousStep')}
                </Button>
                <Button
                  size="lg"
                  onClick={() => setCurrentStep(prev => Math.min(totalSteps, prev + 1))}
                  disabled={!canProceed()}
                >
                  {currentStep === totalSteps - 1 ? t('finishCalculation') : t('nextStep')}
                </Button>
              </div>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
