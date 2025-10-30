import { useState } from "react";
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, TrendingUp, Home, Wallet } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Tools = () => {
  const { t, language } = useLanguage();
  
  // Form state
  const [propertyPrice, setPropertyPrice] = useState(250000);
  const [downPayment, setDownPayment] = useState(20);
  const [interestRate, setInterestRate] = useState(3.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [monthlyRent, setMonthlyRent] = useState(800);
  const [annualAppreciation, setAnnualAppreciation] = useState(2);
  const [maintenanceCost, setMaintenanceCost] = useState(2500);
  const [propertyTax, setPropertyTax] = useState(1500);
  
  const [showResults, setShowResults] = useState(false);
  
  // Calculate mortgage payment
  const calculateMortgage = () => {
    const principal = propertyPrice * (1 - downPayment / 100);
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    
    const monthlyPayment = principal * 
      (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    return monthlyPayment;
  };
  
  // Calculate results
  const calculateResults = () => {
    const monthlyMortgage = calculateMortgage();
    const totalMonthlyBuying = monthlyMortgage + (maintenanceCost + propertyTax) / 12;
    
    const totalPaid = monthlyMortgage * loanTerm * 12;
    const principal = propertyPrice * (1 - downPayment / 100);
    const totalInterest = totalPaid - principal;
    
    const futurePropertyValue = propertyPrice * Math.pow(1 + annualAppreciation / 100, loanTerm);
    const totalRentPaid = monthlyRent * loanTerm * 12;
    
    const buyingNetPosition = futurePropertyValue - totalPaid - (maintenanceCost + propertyTax) * loanTerm;
    const rentingNetPosition = -totalRentPaid;
    
    return {
      monthlyMortgage: totalMonthlyBuying,
      monthlyRent,
      totalBuyingCost: totalPaid + (maintenanceCost + propertyTax) * loanTerm + propertyPrice * downPayment / 100,
      totalRentCost: totalRentPaid,
      totalInterest,
      equity: principal,
      futurePropertyValue,
      buyingNetPosition,
      rentingNetPosition,
      isBuyingBetter: buyingNetPosition > rentingNetPosition
    };
  };
  
  const results = showResults ? calculateResults() : null;
  
  const handleCalculate = () => {
    setShowResults(true);
  };
  
  const handleReset = () => {
    setPropertyPrice(250000);
    setDownPayment(20);
    setInterestRate(3.5);
    setLoanTerm(30);
    setMonthlyRent(800);
    setAnnualAppreciation(2);
    setMaintenanceCost(2500);
    setPropertyTax(1500);
    setShowResults(false);
  };

  return (
    <>
      <Helmet>
        <title>{t('toolsTitle')} | Proper Land</title>
        <meta name="description" content={t('toolsSubtitle')} />
      </Helmet>
      
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1 pt-20">
          {/* Hero Section */}
          <section className="py-16 bg-gradient-primary">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl mx-auto text-center animate-fade-up">
                <Calculator className="h-16 w-16 text-primary-foreground mx-auto mb-6" />
                <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
                  {t('toolsTitle')}
                </h1>
                <p className="text-xl text-primary-foreground/90">
                  {t('toolsSubtitle')}
                </p>
              </div>
            </div>
          </section>

          {/* Buy vs Rent Calculator */}
          <section className="py-16">
            <div className="container mx-auto px-6">
              <Card className="max-w-6xl mx-auto shadow-elegant animate-scale-in">
                <CardHeader className="text-center border-b bg-gradient-card">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <Home className="h-8 w-8 text-primary" />
                    <TrendingUp className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-3xl">{t('buyVsRentTitle')}</CardTitle>
                  <CardDescription className="text-base mt-2">
                    {t('buyVsRentDescription')}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Input Section */}
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="propertyPrice" className="text-base font-semibold">
                          {t('propertyPrice')}
                        </Label>
                        <Input
                          id="propertyPrice"
                          type="number"
                          value={propertyPrice}
                          onChange={(e) => setPropertyPrice(Number(e.target.value))}
                          className="text-lg h-12 transition-all focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="downPayment" className="text-base font-semibold">
                          {t('downPayment')}
                        </Label>
                        <Input
                          id="downPayment"
                          type="number"
                          value={downPayment}
                          onChange={(e) => setDownPayment(Number(e.target.value))}
                          className="text-lg h-12 transition-all focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="interestRate" className="text-base font-semibold">
                          {t('interestRate')}
                        </Label>
                        <Input
                          id="interestRate"
                          type="number"
                          step="0.1"
                          value={interestRate}
                          onChange={(e) => setInterestRate(Number(e.target.value))}
                          className="text-lg h-12 transition-all focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="loanTerm" className="text-base font-semibold">
                          {t('loanTerm')}
                        </Label>
                        <Input
                          id="loanTerm"
                          type="number"
                          value={loanTerm}
                          onChange={(e) => setLoanTerm(Number(e.target.value))}
                          className="text-lg h-12 transition-all focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="monthlyRent" className="text-base font-semibold">
                          {t('monthlyRent')}
                        </Label>
                        <Input
                          id="monthlyRent"
                          type="number"
                          value={monthlyRent}
                          onChange={(e) => setMonthlyRent(Number(e.target.value))}
                          className="text-lg h-12 transition-all focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="annualAppreciation" className="text-base font-semibold">
                          {t('annualAppreciation')}
                        </Label>
                        <Input
                          id="annualAppreciation"
                          type="number"
                          step="0.1"
                          value={annualAppreciation}
                          onChange={(e) => setAnnualAppreciation(Number(e.target.value))}
                          className="text-lg h-12 transition-all focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="maintenanceCost" className="text-base font-semibold">
                          {t('maintenanceCost')}
                        </Label>
                        <Input
                          id="maintenanceCost"
                          type="number"
                          value={maintenanceCost}
                          onChange={(e) => setMaintenanceCost(Number(e.target.value))}
                          className="text-lg h-12 transition-all focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="propertyTax" className="text-base font-semibold">
                          {t('propertyTax')}
                        </Label>
                        <Input
                          id="propertyTax"
                          type="number"
                          value={propertyTax}
                          onChange={(e) => setPropertyTax(Number(e.target.value))}
                          className="text-lg h-12 transition-all focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 mt-8">
                    <Button 
                      onClick={handleCalculate}
                      className="flex-1 h-12 text-lg hover:shadow-lg transition-all"
                      size="lg"
                    >
                      <Calculator className="mr-2 h-5 w-5" />
                      {t('calculate')}
                    </Button>
                    <Button 
                      onClick={handleReset}
                      variant="outline"
                      className="h-12 px-8 text-lg hover:bg-secondary transition-all"
                      size="lg"
                    >
                      {t('reset')}
                    </Button>
                  </div>
                  
                  {/* Results Section */}
                  {showResults && results && (
                    <div className="mt-10 animate-fade-up">
                      <Separator className="mb-8" />
                      
                      <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-2">
                        <Wallet className="h-6 w-6 text-primary" />
                        {t('resultsTitle')}
                      </h3>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Buying Column */}
                        <Card className="border-2 border-primary/20 shadow-card hover:shadow-elegant transition-all">
                          <CardHeader className="bg-primary/5 border-b">
                            <CardTitle className="text-xl flex items-center gap-2">
                              <Home className="h-5 w-5 text-primary" />
                              {t('buyingOption')}
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="pt-6 space-y-4">
                            <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                              <span className="font-medium">{t('monthlyPayment')}</span>
                              <span className="font-bold text-lg text-primary">
                                €{results.monthlyMortgage.toLocaleString(language === 'gr' ? 'el-GR' : 'en-US', { maximumFractionDigits: 0 })}
                              </span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                              <span className="font-medium">{t('totalCostYears').replace('{years}', loanTerm.toString())}</span>
                              <span className="font-bold text-lg">
                                €{results.totalBuyingCost.toLocaleString(language === 'gr' ? 'el-GR' : 'en-US', { maximumFractionDigits: 0 })}
                              </span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                              <span className="font-medium">{t('equity')}</span>
                              <span className="font-bold text-lg text-accent">
                                €{results.equity.toLocaleString(language === 'gr' ? 'el-GR' : 'en-US', { maximumFractionDigits: 0 })}
                              </span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                              <span className="font-medium">{t('propertyValue')}</span>
                              <span className="font-bold text-lg text-accent">
                                €{results.futurePropertyValue.toLocaleString(language === 'gr' ? 'el-GR' : 'en-US', { maximumFractionDigits: 0 })}
                              </span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-primary/10 rounded-lg border border-primary/20">
                              <span className="font-semibold">{t('netPosition')}</span>
                              <span className="font-bold text-xl text-primary">
                                €{results.buyingNetPosition.toLocaleString(language === 'gr' ? 'el-GR' : 'en-US', { maximumFractionDigits: 0 })}
                              </span>
                            </div>
                          </CardContent>
                        </Card>
                        
                        {/* Renting Column */}
                        <Card className="border-2 border-accent/20 shadow-card hover:shadow-elegant transition-all">
                          <CardHeader className="bg-accent/5 border-b">
                            <CardTitle className="text-xl flex items-center gap-2">
                              <TrendingUp className="h-5 w-5 text-accent" />
                              {t('rentingOption')}
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="pt-6 space-y-4">
                            <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                              <span className="font-medium">{t('monthlyPayment')}</span>
                              <span className="font-bold text-lg text-primary">
                                €{results.monthlyRent.toLocaleString(language === 'gr' ? 'el-GR' : 'en-US', { maximumFractionDigits: 0 })}
                              </span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                              <span className="font-medium">{t('totalRentPaid')}</span>
                              <span className="font-bold text-lg">
                                €{results.totalRentCost.toLocaleString(language === 'gr' ? 'el-GR' : 'en-US', { maximumFractionDigits: 0 })}
                              </span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                              <span className="font-medium">{t('equity')}</span>
                              <span className="font-bold text-lg text-muted-foreground">
                                €0
                              </span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                              <span className="font-medium">{t('propertyValue')}</span>
                              <span className="font-bold text-lg text-muted-foreground">
                                €0
                              </span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-accent/10 rounded-lg border border-accent/20">
                              <span className="font-semibold">{t('netPosition')}</span>
                              <span className="font-bold text-xl text-accent">
                                €{results.rentingNetPosition.toLocaleString(language === 'gr' ? 'el-GR' : 'en-US', { maximumFractionDigits: 0 })}
                              </span>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                      
                      {/* Recommendation */}
                      <Card className={`mt-8 border-2 ${results.isBuyingBetter ? 'border-primary bg-primary/5' : 'border-accent bg-accent/5'} shadow-lg animate-scale-in`}>
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className={`p-3 rounded-full ${results.isBuyingBetter ? 'bg-primary text-primary-foreground' : 'bg-accent text-accent-foreground'}`}>
                              <TrendingUp className="h-6 w-6" />
                            </div>
                            <div className="flex-1">
                              <h4 className="text-xl font-bold mb-2">{t('recommendation')}</h4>
                              <p className="text-base text-muted-foreground">
                                {results.isBuyingBetter ? t('buyingBetter') : t('rentingBetter')}
                              </p>
                              <div className="mt-4 p-4 bg-background/60 rounded-lg">
                                <p className="text-sm text-muted-foreground">
                                  {results.isBuyingBetter 
                                    ? `${t('buyingOption')}: €${Math.abs(results.buyingNetPosition - results.rentingNetPosition).toLocaleString(language === 'gr' ? 'el-GR' : 'en-US', { maximumFractionDigits: 0 })} ${language === 'gr' ? 'καλύτερη θέση' : 'better position'}`
                                    : `${t('rentingOption')}: €${Math.abs(results.rentingNetPosition - results.buyingNetPosition).toLocaleString(language === 'gr' ? 'el-GR' : 'en-US', { maximumFractionDigits: 0 })} ${language === 'gr' ? 'λιγότερες απώλειες' : 'less losses'}`
                                  }
                                </p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Tools;