import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

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

const TitleText = styled(Typography)(({ theme }) => ({
    fontFamily: '"Anton", "Impact", sans-serif',
    fontWeight: 400,
    fontSize: 'clamp(1.3rem, 3vw, 1.6rem)',
    textTransform: 'uppercase',
    letterSpacing: '0.12em',
    lineHeight: 1.3,
    marginBottom: theme.spacing(2),
}));

const IntroText = styled(Typography)(({ theme }) => ({
    fontFamily: '"Anton", "Impact", sans-serif',
    fontSize: '1.05rem',
    lineHeight: 1.9,
    letterSpacing: '0.05em',
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: theme.spacing(4),
}));

const ContactLabel = styled(Typography)(({ theme }) => ({
    fontFamily: '"Anton", "Impact", sans-serif',
    fontSize: '0.95rem',
    letterSpacing: '0.1em',
    color: '#ff4694',
    marginBottom: theme.spacing(0.5),
    textTransform: 'uppercase',
}));

const ContactValue = styled(Typography)(({ theme }) => ({
    fontFamily: '"Anton", "Impact", sans-serif',
    fontSize: '1.15rem',
    letterSpacing: '0.05em',
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: theme.spacing(3),
    wordBreak: 'break-word',
}));

// Styled links that open in new tab
const ContactLink = styled('a')(({ theme }) => ({
    fontFamily: '"Anton", "Impact", sans-serif',
    fontSize: '1.15rem',
    letterSpacing: '0.05em',
    color: '#ff4694',
    textDecoration: 'none',
    '&:hover': {
        color: 'rgba(255, 70, 148, 0.8)',
        textDecoration: 'underline',
    },
}));

// Map container
const MapContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    height: '450px',
    borderRadius: '12px',
    overflow: 'hidden',
    border: '4px solid #ff4694',
    marginTop: theme.spacing(6),
}));

// Footer spacer
const FooterSpacer = styled('div')({
    height: '100px', // Match footer height
    width: '100%',
});

export default function Contact() {
    return (
        <Box sx={{ pt: '110px', pb: '120px' }}>

            <Section>
                <Container maxWidth="lg">
                    <TitleText sx={{ color: '#374151', textAlign: 'center', mb: 3 }}>
                        Contact
                    </TitleText>

                    <ContactCard>
                        <IntroText sx={{ textAlign: 'center' }}>
                            If you're interested in attending any of our classes, please feel free to contact our head instructor Conor Marron via email or WhatsApp.
                        </IntroText>

                        {/* Email */}
                        <Box sx={{ mb: 4 }}>
                            <ContactLabel>Email</ContactLabel>
                            <ContactValue>
                                <ContactLink
                                    href="mailto:conor.marron@outlook.com"
                                    target="_blank"
                                    rel="noopener"
                                >
                                    conor.marron@outlook.com
                                </ContactLink>
                            </ContactValue>
                        </Box>

                        {/* Phone / WhatsApp */}
                        <Box sx={{ mb: 6 }}>
                            <ContactLabel>Phone / WhatsApp</ContactLabel>
                            <ContactValue>
                                <ContactLink
                                    href="tel:+447597571981"
                                    target="_blank"
                                    rel="noopener"
                                >
                                    07597 571981
                                </ContactLink>
                            </ContactValue>
                            <ContactLink
                                href="https://wa.me/447597571981"
                                target="_blank"
                                rel="noopener"
                                sx={{ display: 'inline-block', mt: 2 }}
                            >
                                Open WhatsApp →
                            </ContactLink>
                        </Box>

                        {/* Location */}
                        <Box sx={{ mt: 6 }}>
                            <ContactLabel>Location</ContactLabel>
                            <ContactValue sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                                46 Deerpark Rd, Bellaghy, Magherafelt BT45 8LB
                            </ContactValue>
                        </Box>

                        {/* Interactive Google Maps Embed */}
                        <MapContainer>
                            <iframe
                                src="https://maps.google.com/maps?q=37%20Jiu%20Jitsu%2C%2046%20Deerpark%20Road%2C%20Magherafelt&output=embed" width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="37 Jiu Jitsu Location"
                            />
                        </MapContainer>
                    </ContactCard>
                </Container>
            </Section>

            {/* Spacer to prevent footer overlap */}
            <FooterSpacer />
        </Box>
    );
}