import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { CheckCircle2, FileText, Upload } from "lucide-react";
import { toast } from "sonner";

export const HowItWorksSteps = () => {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    ownerName: "",
    email: "",
    phone: "",
    address: "",
    propertyType: "",
    size: "",
    bedrooms: "",
    bathrooms: "",
    parking: "",
    yearBuilt: "",
    condition: "",
    askingPrice: "",
    acceptedTerms: false,
    gdprConsent: false,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validateStep1 = () => {
    const required = ['ownerName', 'email', 'phone', 'address', 'propertyType', 'size'];
    return required.every(field => formData[field as keyof typeof formData]);
  };

  const handleSubmit = () => {
    if (!formData.acceptedTerms || !formData.gdprConsent) {
      toast.error("Please accept all terms and conditions");
      return;
    }
    
    toast.success(t('successTitle'));
    // Here you would typically send the data to your backend
  };

  const steps = [
    {
      number: 1,
      title: t('sellStep1Title'),
      description: t('sellStep1Desc'),
      icon: FileText,
    },
    {
      number: 2,
      title: t('sellStep2Title'),
      description: t('sellStep2Desc'),
      icon: CheckCircle2,
    },
    {
      number: 3,
      title: t('sellStep3Title'),
      description: t('sellStep3Desc'),
      icon: Upload,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            {t('sellStepsTitle')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('sellStepsSubtitle')}
          </p>
        </div>

        {/* Stepper */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex justify-between items-center">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = currentStep === step.number;
              const isCompleted = currentStep > step.number;

              return (
                <div key={index} className="flex-1">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all duration-300 ${
                        isActive
                          ? "bg-primary text-primary-foreground shadow-elegant scale-110"
                          : isCompleted
                          ? "bg-primary/80 text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <p className={`text-sm font-medium text-center ${isActive ? "text-primary" : "text-muted-foreground"}`}>
                      {step.title}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`h-1 mt-6 ${isCompleted ? "bg-primary" : "bg-muted"}`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Form Steps */}
        <Card className="max-w-4xl mx-auto shadow-card">
          <CardContent className="p-6 md:p-8">
            {currentStep === 1 && (
              <div className="space-y-6 animate-fade-up">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="ownerName">{t('ownerName')} *</Label>
                    <Input
                      id="ownerName"
                      value={formData.ownerName}
                      onChange={(e) => handleInputChange('ownerName', e.target.value)}
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t('email')} *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">{t('phone')} *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+30 123 456 7890"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="propertyType">{t('propertyType')} *</Label>
                    <Select value={formData.propertyType} onValueChange={(value) => handleInputChange('propertyType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder={t('selectTopic')} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="apartment">{t('apartment')}</SelectItem>
                        <SelectItem value="house">{t('house')}</SelectItem>
                        <SelectItem value="plot">{t('plot')}</SelectItem>
                        <SelectItem value="commercial">{t('commercial')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="address">{t('propertyAddress')} *</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      placeholder="123 Main Street, Athens"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="size">{t('size')} *</Label>
                    <Input
                      id="size"
                      type="number"
                      value={formData.size}
                      onChange={(e) => handleInputChange('size', e.target.value)}
                      placeholder="120"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="yearBuilt">{t('yearBuilt')}</Label>
                    <Input
                      id="yearBuilt"
                      type="number"
                      value={formData.yearBuilt}
                      onChange={(e) => handleInputChange('yearBuilt', e.target.value)}
                      placeholder="2010"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bedrooms">{t('bedrooms')}</Label>
                    <Input
                      id="bedrooms"
                      type="number"
                      value={formData.bedrooms}
                      onChange={(e) => handleInputChange('bedrooms', e.target.value)}
                      placeholder="3"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bathrooms">{t('bathrooms')}</Label>
                    <Input
                      id="bathrooms"
                      type="number"
                      value={formData.bathrooms}
                      onChange={(e) => handleInputChange('bathrooms', e.target.value)}
                      placeholder="2"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="parking">{t('parking')}</Label>
                    <Select value={formData.parking} onValueChange={(value) => handleInputChange('parking', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder={t('selectTopic')} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">{t('yes')}</SelectItem>
                        <SelectItem value="no">{t('no')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="condition">{t('condition')}</Label>
                    <Select value={formData.condition} onValueChange={(value) => handleInputChange('condition', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder={t('selectTopic')} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">{t('conditionNew')}</SelectItem>
                        <SelectItem value="renovated">{t('conditionRenovated')}</SelectItem>
                        <SelectItem value="needs-work">{t('conditionNeedsWork')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="askingPrice">{t('askingPrice')}</Label>
                    <Input
                      id="askingPrice"
                      type="number"
                      value={formData.askingPrice}
                      onChange={(e) => handleInputChange('askingPrice', e.target.value)}
                      placeholder="250000"
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="gdpr"
                    checked={formData.gdprConsent}
                    onCheckedChange={(checked) => handleInputChange('gdprConsent', checked as boolean)}
                  />
                  <label htmlFor="gdpr" className="text-sm text-muted-foreground">
                    {t('gdprConsent')}
                  </label>
                </div>

                <Button
                  onClick={() => {
                    if (validateStep1()) {
                      setCurrentStep(2);
                    } else {
                      toast.error("Please fill in all required fields");
                    }
                  }}
                  className="w-full"
                  variant="hero"
                >
                  {t('nextStep')}
                </Button>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6 animate-fade-up">
                <div className="bg-muted/50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-4">Brokerage Agreement Terms</h3>
                  <div className="space-y-2 text-sm text-muted-foreground max-h-64 overflow-y-auto">
                    <p>This is a sample brokerage agreement. In a real application, this would contain the full legal terms and conditions.</p>
                    <p>Key points would include:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Commission structure and payment terms</li>
                      <li>Exclusive or non-exclusive representation</li>
                      <li>Duration of the agreement</li>
                      <li>Marketing and advertising responsibilities</li>
                      <li>Obligations of both parties</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.acceptedTerms}
                    onCheckedChange={(checked) => handleInputChange('acceptedTerms', checked as boolean)}
                  />
                  <label htmlFor="terms" className="text-sm">
                    {t('acceptTerms')}
                  </label>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="link" className="p-0 h-auto">
                        ({t('viewTerms')})
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>Brokerage Agreement</DialogTitle>
                        <DialogDescription>
                          Full terms and conditions
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 text-sm">
                        <p>This is where the full legal document would be displayed...</p>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>

                <div className="flex gap-4">
                  <Button onClick={() => setCurrentStep(1)} variant="outline" className="flex-1">
                    {t('previousStep')}
                  </Button>
                  <Button
                    onClick={() => {
                      if (formData.acceptedTerms) {
                        setCurrentStep(3);
                      } else {
                        toast.error("Please accept the terms to continue");
                      }
                    }}
                    className="flex-1"
                    variant="hero"
                  >
                    {t('nextStep')}
                  </Button>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6 animate-fade-up">
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-border rounded-lg p-12 text-center hover:border-primary transition-colors cursor-pointer">
                    <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">{t('dragDropPhotos')}</p>
                    <Button variant="link" className="mt-2">{t('uploadPhotos')}</Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button variant="outline" className="h-auto py-8" onClick={() => document.getElementById('experts')?.scrollIntoView({ behavior: 'smooth' })}>
                      <div className="text-center">
                        <p className="font-semibold mb-1">{t('scheduleCall')}</p>
                        <p className="text-xs text-muted-foreground">Get help completing your listing</p>
                      </div>
                    </Button>
                    <Button variant="hero" className="h-auto py-8" onClick={handleSubmit}>
                      <div className="text-center">
                        <p className="font-semibold mb-1">{t('submitListing')}</p>
                        <p className="text-xs">Review and publish immediately</p>
                      </div>
                    </Button>
                  </div>
                </div>

                <Button onClick={() => setCurrentStep(2)} variant="outline" className="w-full">
                  {t('previousStep')}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
