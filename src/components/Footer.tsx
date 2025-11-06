import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary-foreground text-secondary py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Column 1: Contact Us */}
        <div>
          <h3 className="text-lg font-semibold text-primary-foreground mb-4">Contact Us</h3>
          <p
            className="text-sm leading-relaxed"
            dangerouslySetInnerHTML={{
              __html:
                "K.Ramakrishnan College of Technology<br>Samayapuram, Trichy - 621 112<br>Tamil Nadu, India",
            }}
          />
          <p>
            <strong>Phone:</strong> +91 431 2648601
          </p>
          <p>
            <strong>Email:</strong> idcs@krct.ac.in
          </p>
        </div>
        {/* Column 2: Follow Us */}
        <div>
          <h3 className="text-lg font-semibold text-primary-foreground mb-4">Follow Us</h3>
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              className="w-10 h-10 bg-background/20 hover:bg-primary text-primary-foreground rounded-full flex items-center justify-center transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-background/20 hover:bg-primary text-primary-foreground rounded-full flex items-center justify-center transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-background/20 hover:bg-primary text-primary-foreground rounded-full flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-background/20 hover:bg-primary text-primary-foreground rounded-full flex items-center justify-center transition-colors"
              aria-label="Linkedin"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="mt-10 pt-6 border-t border-background/20 text-center text-sm">
        <p>© 2025 K.Ramakrishnan College of Technology. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
