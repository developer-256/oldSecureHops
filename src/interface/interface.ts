export interface HeroSection {
  bg?: boolean;
  title: string;
  heading: any;
  subHeading: string;
  primaryBtn: any;
  secondaryBtn: string;
  image: any;
}

export interface CybersecurityServices {
  id: number;
  image: any;
  title: string;
  subtitle: string;
}
export interface SolutionServices {
  id: number;
  image: any;
  title: string;
  subtitle: string;
}
export interface Socsecurityservices {
  id: number;
  image: any;
  title: string;
  subtitle: string;
}

export interface Button {
  title?: any;
  style?: any;
  btnIconStyle?: string;
  className?: string;
  btnIcon?: string;
  onClick?: () => void;
}

export interface MenuItem {
  title: string;
  route?: string;
  children?: MenuItem[];
}
