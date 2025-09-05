import Hero from '@/modules/Normal/Hero';
import HomeFeatures from '@/modules/Normal/HomeFeatures';
import HomeStats from '@/modules/Normal/HomeStats';

const Home = () => {
    return (
        <div className="min-h-screen">
            <Hero />
            <HomeFeatures />
            <HomeStats />
        </div>
    );
};

export default Home;