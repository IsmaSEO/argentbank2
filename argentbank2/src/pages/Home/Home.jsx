import Banner from '../../components/Banner/Banner';
import FeatureItem from '../../components/Features/FeatureItem/FeatureItem';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

import chatIcon from '../../assets/icons/icon-chat.png';
import moneyIcon from '../../assets/icons/icon-money.png';
import securityIcon from '../../assets/icons/icon-security.png';

import './Home.css';

const featuresData = [
  {
    id: 1,
    icon: chatIcon,
    title:'You are our #1 priority',
    description:
      'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes',
  },
  {
    id: 2,
    icon: moneyIcon,
    title: 'More savings means higher rates',
    description:
      'The more you save with us, the higher your interest rate will be!',
  },
  {
    id: 3,
    icon: securityIcon,
    title: 'Security you can trust',
    description:
      'We use top of the line encryption to make sure your data and money is always safe.',
  },
];

const Home = () => (
  <div className="home-container">
    <Navbar />
    <main>
      <Banner />
      <section className="features-section">
        <div className="features-grid">
          {featuresData.map((feature) => (
            <FeatureItem
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Home;
