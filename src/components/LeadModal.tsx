import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface LeadModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  serviceTitle?: string;
}

export const LeadModal = ({ open, onOpenChange, serviceTitle }: LeadModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Lead form submitted:", { ...formData, service: serviceTitle });
    onOpenChange(false);
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Επικοινωνήστε μαζί μας</DialogTitle>
          <DialogDescription>
            {serviceTitle ? `Ενδιαφέρομαι για: ${serviceTitle}` : "Συμπληρώστε τα στοιχεία σας και θα επικοινωνήσουμε μαζί σας."}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Ονοματεπώνυμο *</Label>
            <Input
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Το όνομά σας"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="example@email.com"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Τηλέφωνο *</Label>
            <Input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+30 6XX XXX XXXX"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Μήνυμα</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Πείτε μας περισσότερα για το αίτημά σας..."
              rows={4}
            />
          </div>
          <div className="flex gap-3 pt-2">
            <Button type="submit" className="flex-1">
              Αποστολή
            </Button>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Ακύρωση
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
