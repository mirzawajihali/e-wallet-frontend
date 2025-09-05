import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/layout/ModeToggler';


const Colors = () => {
    return (
        <div>
             <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <header className="flex justify-between items-center">
          <h1 className="text-4xl font-bold text-primary">ZenoPay</h1>
          <ModeToggle />
        </header>

        {/* Theme Preview Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Theme Preview</h2>
          
          {/* Color Palette Display */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-card p-4 rounded-lg border">
              <div className="w-full h-20 bg-background rounded mb-2"></div>
              <p className="text-sm text-muted-foreground">Background</p>
            </div>
            <div className="bg-card p-4 rounded-lg border">
              <div className="w-full h-20 bg-secondary rounded mb-2"></div>
              <p className="text-sm text-muted-foreground">Secondary</p>
            </div>
            <div className="bg-card p-4 rounded-lg border">
              <div className="w-full h-20 bg-accent rounded mb-2"></div>
              <p className="text-sm text-muted-foreground">Accent</p>
            </div>
            <div className="bg-card p-4 rounded-lg border">
              <div className="w-full h-20 bg-primary rounded mb-2"></div>
              <p className="text-sm text-muted-foreground">Primary</p>
            </div>
          </div>

          {/* Interactive Elements */}
          <div className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <Button>Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="destructive">Destructive Button</Button>
            </div>
            
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">Card Example</h3>
              <p className="text-muted-foreground mb-4">
                This is how your content will look in cards with the new color scheme.
                The colors create a natural, earthy tone that's easy on the eyes.
              </p>
              <div className="flex gap-2">
                <Button size="sm">Action</Button>
                <Button size="sm" variant="outline">Cancel</Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
        </div>
    );
};

export default Colors;