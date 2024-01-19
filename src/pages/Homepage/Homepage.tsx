import HeroSection from './sections/HeroSection';
import FAQsection from './sections/FAQsection';
import Characteristics from './sections/Characteristics';
import Categories from './sections/Categories';
import Education from './sections/Education';
import Othercourses from './sections/OtherCoursers';

export default function Homepage() {
  return (
    <div className="items-start bg-white flex flex-col">
      <HeroSection />
      <Characteristics />
      <Categories />
      <Education />
      <FAQsection />
      <Othercourses />
    </div>
  );
}
