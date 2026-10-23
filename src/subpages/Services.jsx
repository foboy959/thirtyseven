import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import timetable from '../assets/timetable.jpeg';

const Section = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4, 0),
  position: 'relative',
}));

// Single black card shell — column layout so all three cards stretch to equal height
const Card = styled(Box)(({ theme }) => ({
  backgroundColor: '#1a1a1a',
  borderRadius: '20px',
  padding: theme.spacing(5),
  border: '1px solid rgba(255, 255, 255, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  height: '100%',
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

const PriceText = styled(Typography)(({ theme }) => ({
  fontFamily: '"Anton", "Impact", sans-serif',
  fontWeight: 400,
  fontSize: 'clamp(2rem, 5vw, 2.75rem)',
  letterSpacing: '0.06em',
  lineHeight: 1,
  color: '#ff4694',
  marginBottom: theme.spacing(3),
}));

const Paragraph = styled(Typography)(({ theme }) => ({
  fontFamily: '"Anton", "Impact", sans-serif',
  fontSize: '1.05rem',
  lineHeight: 1.9,
  letterSpacing: '0.05em',
}));

// Divider above the schedule block
const ScheduleBlock = styled(Box)(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(3),
  paddingTop: theme.spacing(3),
  borderTop: '1px solid rgba(255, 255, 255, 0.15)',
}));

const ScheduleLine = styled(Typography)(({ theme }) => ({
  fontFamily: '"Anton", "Impact", sans-serif',
  fontSize: '1.05rem',
  lineHeight: 1.8,
  letterSpacing: '0.05em',
  color: 'rgba(255, 255, 255, 0.9)',
}));

const NoteLine = styled(Typography)(({ theme }) => ({
  fontFamily: '"Anton", "Impact", sans-serif',
  fontSize: '0.9rem',
  lineHeight: 1.7,
  letterSpacing: '0.05em',
  color: '#ff4694',
  marginTop: theme.spacing(1),
}));

const TimetableImage = styled('img')({
  width: '100%',
  height: 'auto',
  borderRadius: '12px',
  border: '4px solid #ff4694',
  display: 'block',
});

// Footer spacer
const FooterSpacer = styled('div')({
  height: '100px', // Match footer height
  width: '100%',
});

export default function Services() {
  return (
    <Box sx={{ pt: '110px', pb: '120px' }}>

      {/* Intro */}
      <Section>
        <Container maxWidth="md">
          <TitleText sx={{ color: '#374151', textAlign: 'center', mb: 3 }}>
            Services & Pricing
          </TitleText>
          <Paragraph sx={{ color: '#6b7280' }}>
            At 37 Jiujitsu we try to keep our prices as simple as possible. For all of our classes we charge a drop in fee of £12.50 a session if you are not a member. However below you will find our membership packages.
          </Paragraph>
          <Paragraph sx={{ color: '#6b7280', mt: 2 }}>
            Depending on what you plan your training schedule to look like, you might prefer to pay via monthly memberships or the drop in price.
          </Paragraph>
        </Container>
      </Section>

      {/* Pricing cards */}
      <Section>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              // Middle column is wider so the timetable gets real estate
              gridTemplateColumns: { xs: '1fr', md: '1fr 1.6fr 1fr' },
              gap: 4,
              alignItems: 'stretch',
            }}
          >
            {/* Card 1 — Kids */}
            <Card>
              <TitleText sx={{ color: 'white' }}>Kids Monthly Membership</TitleText>
              <PriceText>£30 per month</PriceText>
              <Paragraph sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                This gives your child access to our 4 kids classes per month. These classes are on:
              </Paragraph>
              <ScheduleBlock>
                <ScheduleLine>
                  Mondays 6pm – 7pm
                </ScheduleLine>
                <NoteLine>(Ages strictly 8 – 12)</NoteLine>
              </ScheduleBlock>
            </Card>

            {/* Card 2 — Adults */}
            <Card>
              <TitleText sx={{ color: 'white' }}>Adults Monthly Membership</TitleText>
              <PriceText>£65 per month</PriceText>
              <Paragraph sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                This gives you full access to all of our current adults classes.
              </Paragraph>

              {/* Bleeds past the card padding on desktop only, so it stays inside on mobile */}
              <Box
                sx={{
                  mt: 3,
                  mx: { xs: 0, md: -3 },
                  width: { xs: '100%', md: 'calc(100% + 48px)' },
                }}
              >
                <TimetableImage
                  src={timetable}
                  alt="Weekly class timetable at 37 Jiu Jitsu"
                />
              </Box>
              <ScheduleBlock>
                <ScheduleLine>
                  Membership can be extended to include MMA beginner classes.
                </ScheduleLine>
                <NoteLine>(£20 Additional Fee)</NoteLine>
              </ScheduleBlock>
            </Card>

            {/* Card 3 — Beginners Course */}
            <Card>
              <TitleText sx={{ color: 'white' }}>Beginners Course</TitleText>
              <PriceText>£80</PriceText>
              <Paragraph sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                6 week course running 4 times per year.
              </Paragraph>
              <ScheduleBlock>
                <ScheduleLine>
                  Wednesdays
                  6:30pm – 7:30pm
                </ScheduleLine>
                <ScheduleLine>
                  Fridays
                  6pm – 7pm
                </ScheduleLine>
              </ScheduleBlock>
            </Card>
          </Box>
        </Container>
      </Section>

      {/* Spacer to prevent footer overlap */}
      <FooterSpacer />
    </Box>
  );
}