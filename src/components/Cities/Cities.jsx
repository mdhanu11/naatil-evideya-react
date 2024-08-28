// import React from 'react';
import { Card, Container, Row, Col,  } from 'react-bootstrap';
import './Cities.css'
import iconAddCity from '../../assets/iconAddCity.png'
//cities checking
import Dubai from '../../assets/dubai.png'
import AbuDhabi from '../../assets/abudhabi.png'
import Doha from '../../assets/doha.png'
import KuwaitCity from '../../assets/kuwait.png'
import Riyadh from '../../assets/riyadh.png'
import Muscat from '../../assets/muscat.png'
import Jeddah from '../../assets/jeddah.png'
import London from '../../assets/london.png'
import Toronto from '../../assets/toronto.png'
import Sydney from '../../assets/sydney.png'
//flags
import UAE from '../../assets/flag-United Arab Emirates.png'
import Qatar from '../../assets/flag-Qatar.png'
import Kuwait from '../../assets/flag-Kuwait.png'
import SaudiArabia from '../../assets/flag-Saudi Arabia.png'
import Oman from '../../assets/flag-Oman.png'
import UK from '../../assets/flag-Great Britain.png'
import Canada from '../../assets/flag-Canada.png'
import Australia from '../../assets/flag-Australia.png'

const cities = [
  {
    id: 1,
    rank: '#1',
    name: 'Dubai, UAE',
    keralaPopulation: '856,000 Keralites',
    imgSrc: Dubai,
    flagSrc: UAE,
  },
  {
    id: 2,
    rank: '#2',
    name: 'Abu Dhabi, UAE',
    keralaPopulation: '328,000 Keralites',
    imgSrc: AbuDhabi,
    flagSrc: UAE,
  },
  {
    id: 3,
    rank: '#3',
    name: 'Doha, Qatar',
    keralaPopulation: '240,000 Keralites',
    imgSrc: Doha,
    flagSrc: Qatar,
  },
  {
    id: 4,
    rank: '#4',
    name: 'Kuwait City, Kuwait',
    keralaPopulation: '200,000 Keralites',
    imgSrc: KuwaitCity,
    flagSrc: Kuwait,
  },
  {
    id: 5,
    rank: '#5',
    name: 'Riyadh, Saudi Arabia',
    keralaPopulation: '190,000 Keralites',
    imgSrc: Riyadh,
    flagSrc: SaudiArabia,
  },
  {
    id: 6,
    rank: '#6',
    name: 'Muscat, Oman',
    keralaPopulation: '175,000 Keralites',
    imgSrc: Muscat,
    flagSrc: Oman,
  },
  {
    id: 7,
    rank: '#7',
    name: 'Jeddah, Saudi Arabia',
    keralaPopulation: '160,000 Keralites',
    imgSrc: Jeddah,
    flagSrc: SaudiArabia,
  },
  {
    id: 8,
    rank: '#8',
    name: 'London, UK',
    keralaPopulation: '120,000 Keralites',
    imgSrc: London,
    flagSrc: UK,
  },
  {
    id: 9,
    rank: '#9',
    name: 'Toronto, Canada',
    keralaPopulation: '100,000 Keralites',
    imgSrc: Toronto,
    flagSrc: Canada,
  },
  {
    id: 10,
    rank: '#10',
    name: 'Sydney, Australia',
    keralaPopulation: '90,000 Keralites',
    imgSrc: Sydney,
    flagSrc: Australia,
  },
];

const CitiesGrid = () => {
  return (
    <Container className="mt-5">
      <h2 className="cities-h2 text-center mt-4 mb-5 fs-1" style={{ color: '#525252' }}>Where do you live?</h2>
      <Row>
        {cities.map((city) => (
          <Col key={city.id} md={6} lg={3} className="mb-4"> 
            <Card className="h-100">
              <Card.Img className='card-img' variant="top" src={city.imgSrc} alt={city.name} /> 
              <Card.ImgOverlay className="d-flex flex-column justify-content-between p-2">
                <div className="d-flex justify-content-between">
                  <span className="badge bg-transparent fs-4">{city.rank}</span>
                  <img src={city.flagSrc} alt={`${city.name} Flag`} className="flag-icon" />
                </div>
                <div>
                  <Card.Title className="text-white">{city.name}</Card.Title>
                  <Card.Text className="text-white">{city.keralaPopulation}</Card.Text>
                </div>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
        <Col md={6} lg={3} className="mb-4"> 
          <Card className="h-100 text-center d-flex justify-content-center align-items-center">
          <div className="city-button">
            <img src={iconAddCity} alt="Add icon" className="city-icon" />
            <p className="city-text mt-2 fs-4">Add your city</p>
          </div>
          </Card>
        </Col>
      </Row>
      <p className="text-center text-muted mt-4" style={{ fontSize: 'small' }}>
        {'*Can\'t find your city? Let us help! We carefully select cities based on the number of registrations and requests we receive from around the world. As demand grows, we add new cities to our list and expand our services accordingly.'}
      </p>
    </Container>
  );
};

export default CitiesGrid;
