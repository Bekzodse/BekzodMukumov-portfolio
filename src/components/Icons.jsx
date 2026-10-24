import { FiPhone, FiMail, FiGlobe, FiHome } from "react-icons/fi";
import { FaInstagram, FaGithub, FaDribbble, FaBehance, FaLinkedinIn, FaTwitter, FaTelegramPlane } from "react-icons/fa";

export const iconMap = {
  phone: FiPhone,
  mail: FiMail,
  globe: FiGlobe,
  home: FiHome,
  instagram: FaInstagram,
  github: FaGithub,
  dribbble: FaDribbble,
  behance: FaBehance,
  linkedin: FaLinkedinIn,
  twitter: FaTwitter,
  telegram: FaTelegramPlane,
};

export default function Icon({ name, ...rest }) {
  const C = iconMap[name];
  return C ? <C {...rest} /> : null;
}
