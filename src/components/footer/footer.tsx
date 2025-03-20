import { IconType } from "react-icons"
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa"

export function Footer() {
  const facebookLink: string = "https://www.facebook.com/";
  const instagramLink: string = "https://www.instagram.com/";
  const githubLink: string = "https://github.com/Eduardo-Sousa-Dev";
  const linkedinLink: string = "https://www.linkedin.com/in/eduardo-sousa-dev/";

  const generateLink = (link: string, Icon: IconType) => {
    return (
      <a href={ link } target="_blank" className="text-[#da7910] transition-all duration-500 lg:hover:text-black">
        <Icon size={ 20 } />
      </a>
    )
  };

  return (
    <div className="w-full h-[60px] bg-[#f9fad2] text-[#da7910] flex flex-col justify-center items-center">
      <span className="font-bold">Desenvolvido por Eduardo Sousa</span>
      <div className="flex gap-2">
        { generateLink(facebookLink, FaFacebook) }
        { generateLink(instagramLink, FaInstagram) }
        { generateLink(githubLink, FaGithub) }
        { generateLink(linkedinLink, FaLinkedin) }
      </div>
    </div>
  )
}