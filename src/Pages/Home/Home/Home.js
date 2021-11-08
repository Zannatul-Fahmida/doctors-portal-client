import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import OurBlog from '../OurBlog/OurBlog';
import OurBlogCard from '../OurBlogCard/OurBlogCard';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import Treatment from '../Treatment/Treatment';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <Treatment></Treatment>
            <AppointmentBanner></AppointmentBanner>
            <Testimonial></Testimonial>
            <TestimonialCard></TestimonialCard>
            <OurBlog></OurBlog>
            <OurBlogCard></OurBlogCard>
        </div>
    );
};

export default Home;