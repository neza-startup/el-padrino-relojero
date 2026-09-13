import { faInstagram, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { /*  faLocationDot,  */ faPhone, faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react";
import { useEffect, useRef, useState } from 'react';
import './App.css';
import styles from './styles/App.module.css';
/* import contact from '../assets/contact.svg'; */
/* import nezaBorder from '../assets/neza-logo-border.svg'; */
/* import Modal from './Modal'; */
import cartierSantos1 from './assets/cartier-santos-1.png';
import cartierSantos2 from './assets/cartier-santos-2.png';
import cartierSantos3 from './assets/cartier-santos-3.png';
import cartierSantos4 from './assets/cartier-santos-4.png';
import nezaLogo from './assets/neza-logo.svg';
import profile from './assets/profile.png';
import profile_accesorios from './assets/profile_accesorios.jpg';
import Card from './components/Card';
import Modal from './components/Modal';
import ModalPolicies from './components/ModalPolicies';

function App() {

  const modalRef = useRef(null);
  const modalPoliciesRef = useRef(null);
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
      id: "cartier-santos",
      name: 'Cartier Santos',
      description: 'Descripción del Cartier Santos',
      image: [
        cartierSantos1,
        cartierSantos2,
        cartierSantos3,
        cartierSantos4
      ],
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
      image: [
        cartierSantos1,
        cartierSantos2,
        cartierSantos3,
        cartierSantos4
      ],
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
      image: [
        cartierSantos1,
        cartierSantos2,
        cartierSantos3,
        cartierSantos4
      ],
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
      image: [
        cartierSantos1,
        cartierSantos2,
        cartierSantos3,
        cartierSantos4
      ],
      price: '$250',
      /* link: 'https://www.facebook.com/elvirodominguezsoriano/' */
      brand: 'Brand 2',
      bestSeller: false,
      inStock: true
    },
    {
      id: 5,
      name: 'Fuck 9 - 5',
      description: 'Descripción del Reloj 5',
      image: [
        cartierSantos1,
        cartierSantos2,
        cartierSantos3,
        cartierSantos4
      ],
      price: '$100',
      /* link: 'https://www.tiktok.com/@elvisscochito' */
      brand: 'Brand 1',
      bestSeller: true,
      inStock: true
    },
    {
      id: 6,
      name: 'Tissot PRX',
      description: 'Descripción del Reloj 6',
      image: [
        cartierSantos1,
        cartierSantos2,
        cartierSantos3,
        cartierSantos4
      ],
      price: '$150',
      /* link: 'https://www.instagram.com/elvisscochito/' */
      brand: 'Brand 1',
      bestSeller: false,
      inStock: true
    },
    {
      id: 7,
      name: 'SEIKO Green',
      description: 'Descripción del Reloj 7',
      image: [
        cartierSantos1,
        cartierSantos2,
        cartierSantos3,
        cartierSantos4
      ],
      price: '$200',
      /* link: 'https://wa.me/527771395795' */
      brand: 'Brand 2',
      bestSeller: true,
      inStock: false
    },
    {
      id: 8,
      name: 'SEIKO PRESAGE',
      description: 'Descripción del Reloj 8',
      image: [
        cartierSantos1,
        cartierSantos2,
        cartierSantos3,
        cartierSantos4
      ],
      price: '$250',
      /* link: 'https://www.facebook.com/elvirodominguezsoriano/' */
      brand: 'Brand 2',
      bestSeller: false,
      inStock: true
    }, {
      id: 9,
      name: 'Fuck 9 - 5',
      description: 'Descripción del Reloj 9',
      image: [
        cartierSantos1,
        cartierSantos2,
        cartierSantos3,
        cartierSantos4
      ],
      price: '$100',
      /* link: 'https://www.tiktok.com/@elvisscochito' */
      brand: 'Brand 1',
      bestSeller: true,
      inStock: true
    },
    {
      id: 10,
      name: 'Tissot PRX',
      description: 'Descripción del Reloj 10',
      image: [
        cartierSantos1,
        cartierSantos2,
        cartierSantos3,
        cartierSantos4
      ],
      price: '$150',
      /* link: 'https://www.instagram.com/elvisscochito/' */
      brand: 'Brand 1',
      bestSeller: false,
      inStock: true
    },
    {
      id: 11,
      name: 'SEIKO Green',
      description: 'Descripción del Reloj 11',
      image: [
        cartierSantos1,
        cartierSantos2,
        cartierSantos3,
        cartierSantos4
      ],
      price: '$200',
      /* link: 'https://wa.me/527771395795' */
      brand: 'Brand 2',
      bestSeller: true,
      inStock: false
    },
    {
      id: 12,
      name: 'SEIKO PRESAGE',
      description: 'Descripción del Reloj 12',
      image: [
        cartierSantos1,
        cartierSantos2,
        cartierSantos3,
        cartierSantos4
      ],
      price: '$250',
      /* link: 'https://www.facebook.com/elvirodominguezsoriano/' */
      brand: 'Brand 2',
      bestSeller: false,
      inStock: true
    }
  ];

  const [currentFilter, setCurrentFilter] = useState('all');
  const [currentOrder, setCurrentOrder] = useState('none');
  const [watches, setWatches] = useState(watchCatalog);

  const getFilteredAndSortedWatches = (filter, order) => {
    let result;

    if (filter === 'all') {
      result = watchCatalog;
    } else if (filter === 'bestSeller') {
      result = watchCatalog.filter((watch) => watch.bestSeller === true);
    } else if (filter === 'inStock') {
      result = watchCatalog.filter((watch) => watch.inStock === true);
    } else if (filter === 'outOfStock') {
      result = watchCatalog.filter((watch) => watch.inStock === false);
    } else {
      result = watchCatalog.filter((watch) => watch.brand === filter);
    }

    if (order === 'asc') {
      result = [...result].sort((a, b) => {
        const priceA = parseFloat(a.price.replace('$', ''));
        const priceB = parseFloat(b.price.replace('$', ''));

        return priceA - priceB;
      });
    }

    if (order === 'desc') {
      result = [...result].sort((a, b) => {
        const priceA = parseFloat(a.price.replace('$', ''));
        const priceB = parseFloat(b.price.replace('$', ''));

        return priceB - priceA;
      });
    }

    return result;
  };

  const filterWatches = (filter) => {
    setCurrentFilter(filter);

    const result = getFilteredAndSortedWatches(
      filter,
      currentOrder
    );

    setWatches(result);
  };

  const orderWatchesByPrice = (order) => {
    setCurrentOrder(order);

    const result = getFilteredAndSortedWatches(
      currentFilter,
      order
    );

    setWatches(result);
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

  /* when the URL changes and on mount, update the active tab */
  const setActiveTabFromURL = () => {
    const params = new URLSearchParams(window.location.search);
    const tabName = params.get("tab") || "Relojes";

    setTabs((prevTabs) =>
      prevTabs.map((tab) => ({
        ...tab,
        active: tab.name === tabName,
      }))
    );
  };

  /* on mount read the URL and when the user navigates back or forward in the browser, update the active tab */
  useEffect(() => {
    setActiveTabFromURL();

    window.addEventListener("popstate", setActiveTabFromURL);

    return () => {
      window.removeEventListener("popstate", setActiveTabFromURL);
    };
  }, []);

  /* when the active tab changes, update the URL */
  /* useEffect(() => {
    const activeTab = tabs.find((tab) => tab.active);
    if (!activeTab) return;

    const params = new URLSearchParams(window.location.search);
    const currentTab = params.get("tab");

    if (currentTab !== activeTab.name) {
      window.history.pushState(null, "", `?tab=${activeTab.name}`);
    }
  }, [tabs]); */

  /*  handle tab switching */
  const handleTabClick = (id) => {
    setTabs((prevTabs) =>
      prevTabs.map((tab) => ({
        ...tab,
        active: tab.id === id,
      }))
    );
  };

  /* update the URL when the active tab changes */
  useEffect(() => {
    const activeTab = tabs.find((tab) => tab.active);

    if (!activeTab) return;

    const params = new URLSearchParams(window.location.search);
    const currentTab = params.get("tab");

    if (currentTab !== activeTab.name) {
      window.history.pushState(
        null,
        "",
        `?tab=${activeTab.name}${window.location.hash}`
      );
    }
  }, [tabs]);

  /* validate if the watch id in the URL hash exists in the watchCatalog, if not, remove the hash from the URL */
  useEffect(() => {
    const hash = window.location.hash;

    if (!hash.startsWith('#watch-')) return;

    const watchId = hash.replace('#watch-', '');

    const watchExists = watchCatalog.some(
      (watch) => String(watch.id) === watchId
    );

    if (!watchExists) {
      window.history.replaceState(
        null,
        '',
        `${window.location.pathname}?tab=Relojes`
      );
    }
  }, []);

  /* Scroll to a specific watch when the URL hash changes */
  useEffect(() => {
    if (!window.location.hash) return;

    const scrollToWatch = () => {
      const element = document.querySelector(window.location.hash);

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    };

    setTimeout(scrollToWatch, 300);
  }, [watches]);

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

  const handleModal = () => {
    modalRef.current?.open(
      "Padrinos y Madrinas 🤝",
      "Soy David Juárez, El Padrino Relojero. Ofrezco relojes y accesorios de alta calidad, con productos exclusivos y atención personalizada. Contáctame por WhatsApp para más información."
    );
  }

  const openSettings = () => {
    /* console.log("Open Settings Modal"); */

    modalRefSettings.current?.open();
  }

  const activeTab = tabs.find((tab) => tab.active) || tabs[0];

  const openPoliciesModal = () => {
    modalPoliciesRef.current?.open();
  }

  return (
    <>
      <Analytics />
      <SpeedInsights />
      <nav className={styles.navbar}>
        <h2 className={styles.navbarTitle}>El Padrino {activeTab.name}</h2>
      </nav>

      <div className={styles.switchTab}>
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
      </div>

      <div className={styles.linkInBio}>
        {/* TODO: ADD Modal like Instagram Stories */}
        <figure className={styles.profileFigure}>
          <img src={tabs.find(tab => tab.active).name === 'Relojes' ? profile : profile_accesorios} alt="My Profile Picture" className={styles.profileImage} onClick={handleModal} />
          {/* <div className={styles.onlineStatus}> */}
          {/* <span className={styles.statusIndicator}></span> */}
          {/* <span>Online</span> */}
          {/* </div> */}
        </figure>
        <header className={styles.header}>
          <h1 className={styles.heading}>El Padrino {activeTab.name}</h1>
          <span className={styles.username}>
            {
              tabs.find(tab => tab.active).name === 'Relojes' && ('@elpadrino_relojero')
            }
            {
              tabs.find(tab => tab.active).name === 'Accesorios' && ('@elpadrino_accessorios')
            }
          </span>

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
            {
              tabs.find(tab => tab.active).name === 'Relojes' && (
                <>
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
                </>
              )
            }
            {
              tabs.find(tab => tab.active).name === 'Accesorios' && (
                <>
                  <div className={styles.stat}>
                    <span>1K+</span>
                    <span>Ventas</span>
                  </div>

                  <div className={styles.stat}>
                    <span>500+</span>
                    <span>Clientes</span>
                  </div>

                  <div className={styles.stat}>
                    <span>20+</span>
                    <span>Artículos</span>
                  </div>
                </>
              )
            }
          </div>

          <div className={styles.bio}>
            {
              tabs.find(tab => tab.active).name === 'Relojes' && (
                <>
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
                    Entregas personales 🤝
                  </span>
                  <span>
                    Envíos Gratis ✈️
                  </span>
                  <div className={styles.location}>
                    {/* <FontAwesomeIcon icon={faLocationDot} className={styles.icon} /> */}
                    CDMX 🇲🇽
                  </div>
                </>
              )
            }
            {
              tabs.find(tab => tab.active).name === 'Accesorios' && (
                <>
                  <span className={styles.categoy}>
                    Accesorios 💼{/*  Jewelry/watches */}
                  </span>
                  <span className={styles.tagline}>
                    Madrinas y Padrinos ❤️
                  </span>
                  <span className={styles.owner}>
                    By: David Juárez el Padrino 🌹
                  </span>
                  {/* <span>
                    Envíos Gratis ✈️
                  </span> */}
                  <div className={styles.location}>
                    {/* <FontAwesomeIcon icon={faLocationDot} className={styles.icon} /> */}
                    CDMX 🇲🇽
                  </div>
                </>
              )
            }
          </div>

          <div className={styles.policiesContainer}>
            {/* <span className={styles.paymentMethods}>
              Métodos de Pago:
              <span className={styles.paymentMethod}>Efectivo</span>
              <span className={styles.paymentMethod}>Transferencia</span>
              <span className={styles.paymentMethod}>Mercado Pago</span>
            </span>
            <span className={styles.shippingInfo}>
              Envíos a todo México 🇲🇽
            </span> */}
            Ver&nbsp;<span className={styles.policiesLink} onClick={openPoliciesModal}>políticas de envios y devoluciones &#8599;</span>
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
        <div className={styles.filterAndOrderContainer}>
          <div className={styles.filterContainer}>
            <label htmlFor="filterSelect" className={styles.filterLabel}>Filtrar por:</label>
            <select id='filterSelect' name='filterSelect' className={styles.filterSelect} value={currentFilter} onChange={(e) => filterWatches(e.target.value)}>
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
            <label htmlFor="orderSelect" className={styles.orderLabel}>Ordenar por precio:</label>
            <select id='orderSelect' name='orderSelect' className={styles.orderSelect} value={currentOrder} onChange={(e) => orderWatchesByPrice(e.target.value)}>
              <option value="none">Ninguno</option>
              <option value="asc">Menor a Mayor</option>
              <option value="desc">Mayor a Menor</option>
            </select>
          </div>
        </div>

        <div className={styles.content}>
          {
            tabs.find(tab => tab.active).name === 'Relojes' && (
              <>
                <div className={styles.cardsContainer}>
                  {watches.map((reloj) => (
                    <Card key={reloj.id} id={reloj.id} name={reloj.name} description={reloj.description} image={reloj.image} price={reloj.price} />
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

        <Modal ref={modalRef} />
        <ModalPolicies ref={modalPoliciesRef} />
      </div >

      <div className={styles.whatsAppButtonContainer}>
        <a className={styles.faWhatsappButton} href='https://wa.me/527771204363' target='_blank' rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} className={styles.faWhatsappIcon} />
        </a>
        <span>Chatea con El Padrino</span>
      </div>

      <footer className={styles.footer}>
        <span className={styles.footerText}>Copyright &#169; {new Date().getFullYear()}. El Padrino Relojero. Todos los derechos reservados.{/* </span> */}
          {/* <span className={styles.footerText}> */}</span>
        <span className={styles.footerText}>Desarrollado por <a href="https://www.nezastartup.com" target="_blank" rel="noopener noreferrer" className={styles.link}>Neza Startup <img src={nezaLogo} alt="Neza Logo" className={styles.icon} /> &#8599;</a></span>
      </footer>
    </>
  )
}

export default App
