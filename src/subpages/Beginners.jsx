import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import rolling from '../assets/rolling.webp';


const Section = styled(Box)(({ theme }) => ({
    padding: theme.spacing(4, 0),
    position: 'relative',
}));

// Black card — matches Services.jsx
const ContactCard = styled(Box)(({ theme }) => ({
    backgroundColor: '#1a1a1a',
    borderRadius: '20px',
    padding: theme.spacing(6),
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'all 0.3s ease',
    '&:hover': {
        borderColor: 'rgba(255, 255, 255, 0.3)',
        transform: 'translateY(-4px)',
    },
}));

const ContentLayout = styled(Box)(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: '1.5fr 1fr',
    gap: theme.spacing(5),
    alignItems: 'center',

    [theme.breakpoints.down('md')]: {
        gridTemplateColumns: '1fr',
    },
}));

const ImageForBeginners = styled('img')({
    width: '100%',
    maxWidth: '500px',
    height: 'auto',
    borderRadius: '12px',
    border: '4px solid #ff4694',
    display: 'block',
    margin: '0 auto',
});

const Paragraph = styled(Typography)(({ theme }) => ({
    fontFamily: '"Anton", "Impact", sans-serif',
    fontSize: '1.05rem',
    lineHeight: 1.9,
    letterSpacing: '0.05em',
}));

const TitleText = styled(Typography)(({ theme }) => ({
    fontFamily: '"Anton", "Impact", sans-serif',
    fontWeight: 400,
    fontSize: 'clamp(1.3rem, 3vw, 1.6rem)',
    textTransform: 'uppercase',
    letterSpacing: '0.12em',
    lineHeight: 1.3,
    marginBottom: theme.spacing(2),
}));

// Styled links that open in new tab
const ContactLink = styled('a')(({ theme }) => ({
    fontFamily: '"Anton", "Impact", sans-serif',
    fontSize: '1.15rem',
    letterSpacing: '0.05em',
    color: '#ff4694',
    textDecoration: 'none',
    '&:hover': {
        color: '#ff4694cc',
        textDecoration: 'underline',
    },
}));

// Footer spacer
const FooterSpacer = styled('div')({
    height: '100px', // Match footer height
    width: '100%',
});

export default function Beginners() {
    return (
        <Box sx={{ pt: '110px', pb: '120px' }}>

            <Section>
                <Container maxWidth="lg">
                    <TitleText sx={{ color: '#374151', textAlign: 'center', mb: 3 }}>
                        Beginners Course
                    </TitleText>
                    <ContactCard>
                        <TitleText sx={{ color: '#ff4694', textAlign: 'center', mb: 3 }}>
                            Start Your Brazilian Jiu-Jitsu Journey
                        </TitleText>

                        <ContentLayout>
                            {/* Text content — left column */}
                            <Box>
                                <Paragraph sx={{ color: '#fdfdfd', mb: 3 }}>
                                    Join the team with our 6-week beginner course, designed to
                                    introduce you to Brazilian Jiu-Jitsu in a welcoming, supportive
                                    environment. Whether your goal is to build confidence, improve
                                    your fitness, or learn a new skill, this course will give you
                                    the foundation to get started properly.
                                </Paragraph>

                                <Paragraph sx={{ color: '#fdfdfd', mb: 3 }}>
                                    Over six weeks, you’ll learn the core techniques, movements,
                                    and concepts of BJJ, along with how to train safely and
                                    effectively. No experience or prior fitness level is required,
                                    just a willingness to learn and get involved.
                                </Paragraph>

                                <Paragraph sx={{ color: '#fdfdfd', mb: 3 }}>
                                    Each session is led by experienced coaches who will guide you
                                    step-by-step, helping you progress at your own pace while
                                    becoming part of a friendly, close-knit team.
                                </Paragraph>

                                <Paragraph sx={{ color: '#fdfdfd', mb: 3 }}>
                                    Spaces are limited, so don’t miss your opportunity to start.
                                    Come train, improve, and discover what you’re capable of.
                                    We look forward to welcoming you on the mats.
                                </Paragraph>

                                <Paragraph sx={{ color: '#fdfdfd', mb: 3 }}>
                                    Head over to our{' '}
                                    <ContactLink href="/services">Services</ContactLink> page to
                                    view the course schedule and secure your spot today!
                                </Paragraph>

                                <Paragraph sx={{ color: '#fdfdfd', mb: 3 }}>
                                    Check our social media pages for updates and announcements
                                    about the course. Follow us on{' '}
                                    <ContactLink
                                        href="https://www.instagram.com/37jiujitsu/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Instagram
                                    </ContactLink>{' '}
                                    and{' '}
                                    <ContactLink
                                        href="https://www.facebook.com/37jiujitsu"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Facebook
                                    </ContactLink>{' '}
                                    to stay connected with the latest news and events.
                                </Paragraph>

                                <Paragraph sx={{ color: '#fdfdfd', mb: 3 }}>
                                    <ContactLink href="/contact">Contact</ContactLink> our head
                                    instructor, Conor Marron, with any questions or for further
                                    information.
                                </Paragraph>

                                <Paragraph sx={{ color: '#fdfdfd', mb: 3 }}>
                                    Please note: Your space is only confirmed once payment has
                                    been received!
                                </Paragraph>
                            </Box>

                            {/* Image — right column */}
                            <Box sx={{ width: '100%' }}>
                                <ImageForBeginners
                                    src={rolling}
                                    alt="Brazilian Jiu-Jitsu beginners training"
                                />
                            </Box>
                        </ContentLayout>
                    </ContactCard>
                </Container>
            </Section>

            {/* Spacer to prevent footer overlap */}
            <FooterSpacer />
        </Box >
    );
}