import linkicon from "@/public/linkicon.svg";
import Image from "next/image";
import linkedin from "@/public/linkedin.svg";
import instagram2 from "@/public/instagram2.svg";
import tiktok from "@/public/tiktok.svg";
import email from "@/public/email.svg";
import youtube from "@/public/youtube.svg";
import logo from "@/public/logo.svg";
const LanaFooter = () => {
  const footerLinks = {
    about: [
      { label: "Who's Lana?", href: "#", hasIcon: true },
      { label: "Careers", href: "#", hasIcon: true },
    ],
    drinks: [
      { label: "Trending Drinks", href: "#", hasIcon: true },
      { label: "Pitch Your Drink!", href: "#", hasIcon: true },
    ],
    events: [
      { label: "Lana Events", href: "#", hasIcon: true },
      { label: "Event FAQs", href: "#", hasIcon: true },
    ],
    community: [
      { label: "SOBER Society", href: "#", hasIcon: true },
      { label: "Refer & Earn", href: "#", hasIcon: false, badge: "$10" },
    ],
  };

  const socialLinks = [
    { icon: instagram2, href: "#", label: "Instagram" },
    {
      icon: tiktok,
      href: "#",
      label: "TikTok",
    },
    { icon: youtube, href: "#", label: "YouTube" },
    { icon: linkedin, href: "#", label: "LinkedIn" },
    { icon: email, href: "#", label: "Email" },
  ];

  return (
    <footer className="bg-white border-t border-gray-200 font-sans container max-w-[1312px] px-1 mx-auto ">
      <div className="  pb-5 pt-7  lg:pt-11">
        {/* Main Footer Content */}
        <div className="flex items-start w-full gap-2 lg:gap-12 xl:gap-20 flex-col lg:flex-row">
          <div className="lg:col-span-1  ">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-8 h-8 lg:min-w-[62px] lg:h-[62px] ">
                <Image src={logo} alt="" className="object-contain" />
              </div>
              <div>
                <h2 className="text-2xl lg:text-[38px] font-sans  font-medium text-[#101828]">
                  Lana
                </h2>
                <p className="text-nowrap text-sm text-[#717680] font-medium">
                  The World&apos;s First Non-
                  <br />
                  Alcoholic AI Drink Curator
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 w-full mt-2 tracking-tight">
            {/* Brand Section */}

            {/* About Section */}
            <div className="lg:col-span-1">
              <div className="space-y-3 lg:space-y-4">
                {footerLinks.about.map((link, index) => (
                  <div key={index}>
                    <a
                      href={link.href}
                      className="text-[#181D27] font-medium transition-colors duration-200 flex items-center gap-2 group text-sm lg:text-base"
                    >
                      {link.label}
                      {link.hasIcon && (
                        <Image
                          src={linkicon}
                          alt=""
                          className="w-2 h-2 lg:w-4 lg:h-4 opacity-50 group-hover:opacity-100 transition-opacity flex-shrink-0"
                        />
                      )}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Drinks Section */}
            <div className="lg:col-span-1">
              <div className="space-y-3 lg:space-y-4">
                {footerLinks.drinks.map((link, index) => (
                  <div key={index}>
                    <a
                      href={link.href}
                      className="text-[#181D27] font-medium transition-colors duration-200 flex items-center gap-2 group text-sm lg:text-base"
                    >
                      {link.label}
                      {link.hasIcon && (
                        <Image
                          src={linkicon}
                          alt=""
                          className="w-2 h-2 lg:w-4 lg:h-4 opacity-50 group-hover:opacity-100 transition-opacity flex-shrink-0"
                        />
                      )}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Events Section */}
            <div className="lg:col-span-1">
              <div className="space-y-3 lg:space-y-4">
                {footerLinks.events.map((link, index) => (
                  <div key={index}>
                    <a
                      href={link.href}
                      className="text-[#181D27] font-medium transition-colors duration-200 flex items-center gap-2 group text-sm lg:text-base"
                    >
                      {link.label}
                      {link.hasIcon && (
                        <Image
                          src={linkicon}
                          alt=""
                          className="w-2 h-2 lg:w-4 lg:h-4 opacity-50 group-hover:opacity-100 transition-opacity flex-shrink-0"
                        />
                      )}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Section */}
            <div className="lg:col-span-1">
              <div className="space-y-3 lg:space-y-4">
                {footerLinks.community.map((link, index) => (
                  <div key={index}>
                    <a
                      href={link.href}
                      className="text-[#181D27] font-medium transition-colors duration-200 flex items-center gap-2 group text-sm lg:text-base"
                    >
                      {link.label}
                      {link.hasIcon && (
                        <Image
                          src={linkicon}
                          alt=""
                          className="w-2 h-2 lg:w-4 lg:h-4 opacity-50 group-hover:opacity-100 transition-opacity flex-shrink-0"
                        />
                      )}
                      {link.badge && (
                        <span className="w-[45px] h-[24px] px-[10px] py-0.5 border border-[#ABEFC6] rounded-full bg-[#ECFDF3] text-[#067647] text-sm font-medium leading-[20px] text-center">
                          $10
                        </span>
                      )}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 lg:pt-6 mt-1 lg:mt-2 border-t border-gray-200 gap-4">
          <p className="text-[#181D27] font-sans tracking-tight text-base order-2 sm:order-1">
            © 2025 Lana. All rights reserved.
          </p>

          <div className="flex items-center gap-4 lg:gap-4 order-1 sm:order-2">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="text-gray-600 hover:text-black transition-colors duration-200"
                >
                  <Image
                    src={IconComponent}
                    alt=""
                    className="w-[42px] h-[42px]"
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LanaFooter;
