  
import React from 'react';
import SEO from "../components/seo";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import Layout from "../components/layout";
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import CodeIcon from '@material-ui/icons/Code';
import StarIcon from '@material-ui/icons/Star';
 
 
 class Timeline extends React.Component {
     render() {
        return (
            <Layout>
            <SEO title="Experience" />
            <h1>Experience</h1>
            <VerticalTimeline>
            <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
                    date="2019 - present"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<CodeIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Code First Girls</h3>
                    <h4 className="vertical-timeline-element-subtitle">AND Digital</h4>
                    <h5 className="vertical-timeline-element-subtitle">2019 - 2019</h5>
                    <p>
                    Volunteer Intructor.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2019 - present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">AND Digital</h3>
                    <h4 className="vertical-timeline-element-subtitle">Club Dekker</h4>
                    <h5 className="vertical-timeline-element-subtitle">2019 - present</h5>
                    <p>
                    Intern Developer.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff'}}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
                    date="2017 - present"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Aston University</h3>
                    <h4 className="vertical-timeline-element-subtitle">Birmingham</h4>
                    <h5 className="vertical-timeline-element-subtitle">2017 - present</h5>
                    <p>
                    Studying Computer Scienc (Bcs), curently undergoing placement.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2018 - 2019"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">President of WEST Society</h3>
                    <h4 className="vertical-timeline-element-subtitle">Aston University, Birmingham</h4>
                    <h5 className="vertical-timeline-element-subtitle">2018 - 2019</h5>
                    <p>
                    Started the first Women in Technology society at university, which we then merged to become WEST- Women in Engineering, Science and Technmology.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2015- 2015"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Telefonica's Wayra</h3>
                    <h4 className="vertical-timeline-element-subtitle">London, Air Street</h4>
                    <h5 className="vertical-timeline-element-subtitle">2015 - 2015</h5>
                    <p>
                    Worked as an assistant to the events manager and over saw meetings and events for the start ups.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff'}}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
                    date="2015 - 2017"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Sixth Form </h3>
                    <h4 className="vertical-timeline-element-subtitle">A Levels</h4>
                    <h5 className="vertical-timeline-element-subtitle">2015 - 2017</h5>
                    <p>
                    Studied Business, Mathematics, Computer Science, Media(AS Level)
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    icon={<StarIcon />}
                />
            </VerticalTimeline>
            </Layout>
        );
     }
 }

 export default Timeline;