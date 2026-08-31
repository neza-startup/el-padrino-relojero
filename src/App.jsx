import { faInstagram, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { /*  faLocationDot,  */ faPhone, faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react";
import { useEffect, useRef, useState } from 'react';
import styles from '../styles/App.module.css';
import './App.css';
/* import contact from '../assets/contact.svg'; */
/* import nezaBorder from '../assets/neza-logo-border.svg'; */
/* import Modal from './Modal'; */
import profile from './assets/profile.png';
import watch1 from './assets/watch1.png';
import watch2 from './assets/watch2.png';
import watch3 from './assets/watch3.png';
import watch4 from './assets/watch4.png';
import Card from './components/Card';

function App() {

  const modalRef = useRef(null);
  const modalRefSettings = useRef(null);
  const [tabs, setTabs] = useState([
    {
      id: 1,
      name: 'Relojes',
      active: true
    },
    {
      id: 2,
      name: 'Accesorios',
      active: false
    },
  ]);

  const watchCatalog = [
    {
      id: 1,
      name: 'Fuck 9 - 5',
      description: 'Descripción del Reloj 1',
      image: watch1,
      price: '$100',
      /* link: 'https://www.tiktok.com/@elvisscochito' */
      brand: 'Brand 1',
      bestSeller: true,
      inStock: true
    },
    {
      id: 2,
      name: 'Tissot PRX',
      description: 'Descripción del Reloj 2',
      image: watch2,
      price: '$150',
      /* link: 'https://www.instagram.com/elvisscochito/' */
      brand: 'Brand 1',
      bestSeller: false,
      inStock: true
    },
    {
      id: 3,
      name: 'SEIKO Green',
      description: 'Descripción del Reloj 3',
      image: watch3,
      price: '$200',
      /* link: 'https://wa.me/527771395795' */
      brand: 'Brand 2',
      bestSeller: true,
      inStock: false
    },
    {
      id: 4,
      name: 'SEIKO PRESAGE',
      description: 'Descripción del Reloj 4',
      image: watch4,
      price: '$250',
      /* link: 'https://www.facebook.com/elvirodominguezsoriano/' */
      brand: 'Brand 2',
      bestSeller: false,
      inStock: true
    }
  ];

  const [currentFilter, setCurrentFilter] = useState('all');
  const [watches, setWatches] = useState(watchCatalog);

  const filterWatches = (filter) => {
    setCurrentFilter(filter);
    if (filter === 'all') {
      setWatches(watchCatalog);
    } else if (filter === 'bestSeller') {
      const filteredWatches = watchCatalog.filter((watch) => watch.bestSeller === true);
      setWatches(filteredWatches);
    } else if (filter === 'inStock') {
      const filteredWatches = watchCatalog.filter((watch) => watch.inStock === true);
      setWatches(filteredWatches);
    } else if (filter === 'outOfStock') {
      const filteredWatches = watchCatalog.filter((watch) => watch.inStock === false);
      setWatches(filteredWatches);
    } else {
      const filteredWatches = watchCatalog.filter((watch) => watch.brand === filter);
      setWatches(filteredWatches);
    }
  };

  const orderWatchesByPrice = (order) => {
    if (order === 'none') {
      filterWatches(currentFilter);
      return;
    }

    const sortedWatches = [...watches].sort((a, b) => {
      const priceA = parseFloat(a.price.replace('$', ''));
      const priceB = parseFloat(b.price.replace('$', ''));
      return order === 'asc' ? priceA - priceB : priceB - priceA;
    });
    setWatches(sortedWatches);
  };

  /* handle tab switching */
  /* const handleTabClick = (id) => {
    setTabs(tabs.map((tab) => ({
      ...tab,
      active: tab.id === id,
    })));
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tabName = params.get('tab') || 'Socials';

    setTabs(tabs.map((tab) => ({
      ...tab,
      active: tab.name === tabName,
    })));
  }, []);

  useEffect(() => {
    const activeTab = tabs.find(tab => tab.active);
    if (activeTab) {
      window.history.pushState(null, "", `?tab=${activeTab.name}`);
    }
  }, [tabs]); */

  /* handle tab switching */
  /* const handleTabClick = (id) => {
    const newTabs = tabs.map((tab) => ({
      ...tab,
      active: tab.id === id,
    }));
    setTabs(newTabs);

    const activeTab = newTabs.find(tab => tab.active);
    if (activeTab) {
      window.history.pushState({ tab: activeTab.name }, "", `?tab=${activeTab.name}`);
    }
  };

  useEffect(() => {
    const handlePopstate = (event) => {
      const tabName = event.state?.tab || new URLSearchParams(window.location.search).get('tab') || 'Socials';
      setTabs(prevTabs => prevTabs.map((tab) => ({
        ...tab,
        active: tab.name === tabName,
      })));
    };

    window.addEventListener('popstate', handlePopstate);
    return () => window.removeEventListener('popstate', handlePopstate);
  }, []); */

  const setActiveTabFromURL = () => {
    const params = new URLSearchParams(window.location.search);
    const tabName = params.get("tab") || "Socials";

    setTabs((prevTabs) =>
      prevTabs.map((tab) => ({
        ...tab,
        active: tab.name === tabName,
      }))
    );
  };

  // 🔹 Al montar: leer URL + escuchar back / forward
  useEffect(() => {
    setActiveTabFromURL();

    window.addEventListener("popstate", setActiveTabFromURL);

    return () => {
      window.removeEventListener("popstate", setActiveTabFromURL);
    };
  }, []);

  // 🔹 Cuando cambia la tab activa → actualizar URL
  useEffect(() => {
    const activeTab = tabs.find((tab) => tab.active);
    if (!activeTab) return;

    const params = new URLSearchParams(window.location.search);
    const currentTab = params.get("tab");

    if (currentTab !== activeTab.name) {
      window.history.pushState(null, "", `?tab=${activeTab.name}`);
    }
  }, [tabs]);

  /*  handle tab switching */
  const handleTabClick = (id) => {
    setTabs((prevTabs) =>
      prevTabs.map((tab) => ({
        ...tab,
        active: tab.id === id,
      }))
    );
  };

  const handleModal = () => {
    modalRef.current?.open(
      "Welcome",
      "Hi there! Thanks for checking out my Link In Bio page. Feel free to explore my socials and projects. If you'd like to get in touch, don't hesitate to reach out via email, phone or WhatsApp. Have a great day!"
    );
  }

  const openSettings = () => {
    /* console.log("Open Settings Modal"); */

    modalRefSettings.current?.open();
  }

  const handleShare = () => {
    const shareData = {
      title: 'El Padrino Relojero',
      text: 'Check out El Padrino Relojero!',
      url: 'https://www.elpadrinorelojero.com',
    };

    if (navigator.share) {
      navigator.share(shareData)
        .then(() => console.log('Shared successfully'))
        .catch((error) => console.error('Error sharing:', error));
    } else {
      alert('Sharing is not supported in this browser.');
    }
  };

  return (
    <>
      <Analytics />
      <SpeedInsights />
      <nav className={styles.navbar}>
        <h2 className={styles.navbarTitle}>El Padrino Relojero</h2>
      </nav>

      {/* <div className={styles.switchTab}>
        {
          tabs.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.tabButton} ${tab.active ? styles.activeTab : ''}`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.name}
            </button>
          ))
        }
      </div> */}

      <div className={styles.linkInBio}>
        {/* TODO: ADD Modal like Instagram Stories */}
        <figure className={styles.profileFigure}>
          <img src={profile} alt="My Profile Picture" className={styles.profileImage} onClick={handleModal} />
          {/* <div className={styles.onlineStatus}> */}
          {/* <span className={styles.statusIndicator}></span> */}
          {/* <span>Online</span> */}
          {/* </div> */}
        </figure>
        <header className={styles.header}>
          <h1 className={styles.heading}>El Padrino Relojero</h1>
          <span className={styles.username}>@elpadrino_relojero</span>

          {/* <div className={styles.description}>
            <span className={styles.location}>
              <FontAwesomeIcon icon={faLocationDot} />
              Mexico  City, Mexico
            </span> */}
          {/* <span className={styles.role}>Full Stack Developer</span>
            <span className={styles.tagline}>Building the future, one line of code at a time.</span> */}
          {/* <span className={styles.roles}>Full-Stack Developer | Front-End Developer | Back-End Developer | Data Scientist | Mobile Developer </span> */}
          {/* <span className={styles.stack}>#JavaScript #React #NodeJS #Python #Django #Flutter #TechEnthusiast</span> */}
          {/* <span className={styles.hashtags}>#coding #programming #developer #technology #innovation</span> */}

          {/* <span className={styles.skills}>
              Skills:
              Web Development
              •
              Software Development
              •
              Business Analytics
              •
              Graphic Design
              •
              Digital Marketing
            </span> */}
          {/* </div> */}

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span>5K+</span>
              <span>Ventas</span>
            </div>

            <div className={styles.stat}>
              <span>2k+</span>
              <span>Clientes</span>
            </div>

            <div className={styles.stat}>
              <span>30+</span>
              <span>Modelos</span>
            </div>
          </div>

          <div className={styles.bio}>
            <span className={styles.categoy}>
              Relojes{/*  Jewelry/watches */}
            </span>
            <span className={styles.tagline}>
              Cada hombre tiene su propio destino🌹
            </span>
            <span className={styles.owner}>
              By: David Juárez el Padrino ⌚️
            </span>
            <span>
              Envíos Gratis ✈️
            </span>
            <div className={styles.location}>
              {/* <FontAwesomeIcon icon={faLocationDot} className={styles.icon} /> */}
              CDMX 🇲🇽
            </div>
          </div>

          <div className={styles.socialLinks}>
            <a href="https://www.tiktok.com/@el.padrino.reloje" download="contact.vcf" target="_blank" rel="noopener noreferrer" className={styles.headerLink}>
              <FontAwesomeIcon icon={faTiktok} className={styles.icon} />
              <span>Tiktok</span>
            </a>
            <a href="https://wa.me/527771204363" target="_blank" rel="noopener noreferrer" className={styles.headerLink}>
              <FontAwesomeIcon icon={faWhatsapp} className={styles.icon} />
              WhatsApp
            </a>
            <a href="tel:+527771204363" target="_blank" rel="noopener noreferrer" className={styles.headerLink}>
              <FontAwesomeIcon icon={faPhone} className={styles.icon} />
              Tel&eacute;fono
            </a>
            <a href="https://www.instagram.com/elpadrino_relojero/" target="_blank" rel="noopener noreferrer" className={styles.headerLink}>
              <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
              Instagram
            </a>
            <span onClick={handleShare} className={styles.headerLink}>
              <FontAwesomeIcon icon={faShare} className={styles.icon} />
              Share
            </span>
          </div>

          {/* <figure>
        <h2>My Anthem:</h2> */}
          {/* <iframe
            allow="autoplay *; encrypted-media *; fullscreen *"
            frameBorder="0"
            height="150"
            style={{ width: '100%', maxWidth: '660px', overflow: 'hidden', background: 'transparent' }}
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
            src="https://embed.music.apple.com/mx/album/desenfocao/1596868386?i=1596868402&l=en-GB"
            title="Apple Music Player"
            className={styles.appleMusicIframe}
          ></iframe> */}

          {/* <figcaption>Song from Apple Music</figcaption>
      </figure> */}

          {/* <div className={styles.disclaimer}>
            <p className={styles.disclaimerText}>
              Here’s all my presence online.
              Tap down bellow to open it. */}
          {/* {t("LinkInBio.disclaimer")} */}
          {/* </p>
          </div> */}

          {/* <a href="#content" className={styles.skipLink}aria-label="Scroll Down to Content">Skip to Content</a> */}

          {/* <a href="/contact.vcf" download="contact.vcf" target="_blank" rel="noopener noreferrer" data-tooltip-id="global-tooltip" data-tooltip-content={t("SocialPath.email")} className={styles.saveContactBtn}> */}
          {/* <img src={contact} alt="Contact Icon" className={styles.icon} /> */}
          {/* <FontAwesomeIcon icon={faContactBook} className={styles.icon} />
            Save/Download Contact
          </a> */}
        </header>

        {/* select filter by watch Brand */}
        <div className={styles.filterContainer}>
          <span className={styles.filterLabel}>Filtrar por:</span>
          <select className={styles.filterSelect} onChange={(e) => filterWatches(e.target.value)}>
            <option value="all">Todos</option>
            <option value="bestSeller">Más Vendidos</option>
            <optgroup label="Marcas">
              <option value="Brand 1">Brand 1</option>
              <option value="Brand 2">Brand 2</option>
            </optgroup>
            <optgroup label="Disponibilidad">
              <option value="inStock">En Stock</option>
              <option value="outOfStock">Agotados</option>
            </optgroup>
          </select>
        </div>

        {/* select order by price */}
        <div className={styles.orderContainer}>
          <span className={styles.orderLabel}>Ordenar por precio:</span>
          <select className={styles.orderSelect} onChange={(e) => orderWatchesByPrice(e.target.value)}>
            <option value="none">Ninguno</option>
            <option value="asc">Menor a Mayor</option>
            <option value="desc">Mayor a Menor</option>
          </select>
        </div>

        <div className={styles.content}>
          {
            tabs.find(tab => tab.active).name === 'Relojes' && (
              <>
                <div className={styles.cardsContainer}>
                  {watches.map((reloj) => (
                    <Card key={reloj.id} name={reloj.name} description={reloj.description} image={reloj.image} price={reloj.price} />
                  ))}
                </div>
              </>
            )
          }
          {/* {
            tabs.find(tab => tab.active).name === 'Projects' && (
              <>
                <a href="https://www.nezastartup.com/link-in-bio" target="_blank" rel="noopener noreferrer" className={styles.linkButtonProjects}>
                  <img src={neza} alt="Neza Logo" className={styles.icon} />
                  Neza Startup
                </a>
                <a href="https://www.corncrunch.com/link-in-bio" target="_blank" rel="noopener noreferrer" className={styles.linkButtonProjects}>
                  <img src={corncrunch} alt="Corn Crunch Logo" className={styles.icon} />
                  Corn Crunch
                </a>
                <a href="https://www.instagram.com/mycover_app/" target="_blank" rel="noopener noreferrer" className={styles.linkButtonProjects}>
                  <FontAwesomeIcon icon={faMobile} className={styles.icon} />
                  myCover App
                </a>
              </>
            )
          } */}
        </div>

        {/* <Modal ref={modalRef} /> */}
      </div >
      <footer className={styles.footer}>
        <span className={styles.footerText}>Copyright &#169; {new Date().getFullYear()}. El Padrino Relojero. Todos los derechos reservados.{/* </span> */}
          {/* <span className={styles.footerText}> */} Desarrollado por <a href="https://www.nezastartup.com" target="_blank" rel="noopener noreferrer" className={styles.link}>Neza Startup</a></span>
      </footer>
    </>
  )
}

export default App
