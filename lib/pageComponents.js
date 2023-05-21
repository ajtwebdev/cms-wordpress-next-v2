import dynamic from "next/dynamic";

// manually import all PageComponents as Next restricts dynamic import from string literals
// TODO: Add the remaining PageComponents to match Flexible Fields
const PageComponents_Badges = dynamic(() =>
  import("components/PageComponents/Badges")
);
const PageComponents_Banner = dynamic(() =>
  import("components/PageComponents/Banner")
);
const PageComponents_ComponentA = dynamic(() =>
  import("components/PageComponents/ComponentA")
);
const PageComponents_ComponentB = dynamic(() =>
  import("components/PageComponents/ComponentB")
);
const PageComponents_ComponentC = dynamic(() =>
  import("components/PageComponents/ComponentC")
);
const PageComponents_ComponentD = dynamic(() =>
  import("components/PageComponents/ComponentD")
);
const PageComponents_ComponentE = dynamic(() =>
  import("components/PageComponents/ComponentE")
);
const PageComponents_ImageLeft = dynamic(() =>
  import("components/PageComponents/ImageLeft")
);
const PageComponents_ImageLeftDark = dynamic(() =>
  import("components/PageComponents/ImageLeftDark")
);
const PageComponents_ImageRight = dynamic(() =>
  import("components/PageComponents/ImageRight")
);
const PageComponents_Text = dynamic(() =>
  import("components/PageComponents/Text")
);
const PageComponents_HeroSlider = dynamic(() =>
  import("components/PageComponents/HeroSlider")
);
const PageComponents_Benefits1 = dynamic(() =>
  import("components/PageComponents/Benefits1")
);
const PageComponents_Testimonial = dynamic(() =>
  import("components/PageComponents/Testimonial")
);
const PageComponents_Faq = dynamic(() =>
  import("components/PageComponents/Faq")
);

const Components = new Map();
Components.set("PageComponents_Badges", PageComponents_Badges);
Components.set("PageComponents_Banner", PageComponents_Banner);
Components.set("PageComponents_ComponentA", PageComponents_ComponentA);
Components.set("PageComponents_ComponentB", PageComponents_ComponentB);
Components.set("PageComponents_ComponentC", PageComponents_ComponentC);
Components.set("PageComponents_ComponentD", PageComponents_ComponentD);
Components.set("PageComponents_ComponentE", PageComponents_ComponentE);
Components.set("PageComponents_ImageLeft", PageComponents_ImageLeft);
Components.set("PageComponents_ImageLeftDark", PageComponents_ImageLeftDark);
Components.set("PageComponents_ImageRight", PageComponents_ImageRight);
Components.set("PageComponents_Text", PageComponents_Text);
Components.set("PageComponents_HeroSlider", PageComponents_HeroSlider);
Components.set("PageComponents_Benefits1", PageComponents_Benefits1);
Components.set("PageComponents_Testimonial", PageComponents_Testimonial);
Components.set("PageComponents_Faq", PageComponents_Faq);

export default Components;
