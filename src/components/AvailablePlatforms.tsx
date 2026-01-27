import { ExternalLink } from "lucide-react";
import amazonLogo from "./assets/amazon.png";
import flipkartLogo from "./assets/flipkart.png";
import meeshoLogo from "./assets/messho.png";
import myntraLogo from "./assets/myntra.png";

const platforms = [
  { name: "Amazon", href: "https://www.amazon.com", logo: amazonLogo },
  { name: "Flipkart", href: "https://www.flipkart.com", logo: flipkartLogo },
  { name: "Meesho", href: "https://www.meesho.com", logo: meeshoLogo },
  { name: "Myntra", href: "https://www.myntra.com", logo: myntraLogo },
];

const AvailablePlatforms = () => {
  return (
    <section className="py-12 bg-muted/30 mb-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center gap-6">
          <h3 className="text-lg font-semibold text-muted-foreground uppercase tracking-wider">
            Comming Soon At
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {platforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.href}
                target="__blank"
                className="group flex items-center justify-center transition-all duration-300"
              >
                {platform.logo ? (
                  <img
                    src={platform.logo}
                    alt={platform.name}
                    className="h-24 md:h-32 object-contain hover:scale-110 transition-transform"
                  />
                ) : (
                  <>
                    <span className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {platform.name}
                    </span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors ml-2" />
                  </>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvailablePlatforms;
