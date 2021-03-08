describe('Homepage', () => {
  before(() => {
    cy.visit('/')
  })

  context('1080p resolution', () => {
    beforeEach(() => {
      cy.viewport(1920, 2080)
    })

    it('should render the Hero component', () => {
      cy.get('#hero')
        .should('be.visible');

      cy.get('.title')
        .should('be.visible');

      cy.get('.subtitle')
        .should('be.visible');

      cy.get('.heroImage')
        .should('be.visible');
    });

    it('should render the Navigation Header', () => {
      cy.get('#basic-navbar-nav')
        .should('be.visible')
        .within(() => {
          cy.get('a').each($a => {
            expect($a).to.have.attr("href");
          })
        })
    });

    it('should render the About component', () => {
      cy.get('#about')
        .should('be.visible');

      cy.get('.description > .gatsby-image-wrapper > picture > img')
        .should('be.visible');

      cy.get('.description')
        .should('be.visible');
    });

    it('should render the Portfolio component', () => {
      cy.get('#portfolio')
        .should('be.visible')
        .within(() => {
          cy.get('.portfolioCard')
            .should('be.visible');

          cy.get('a').each($a => {
            expect($a).to.have.attr("href");
          })
        })
    });

    it('should render the Resume component', () => {
      cy.get('#resume')
        .should('be.visible')
        .within(() => {
          cy.get('a')
            .should('contain', 'download résumé in PDF format')
        })
    });

    it('should render the Contact component', () => {
      cy.get('#contact')
        .should('be.visible')
        .within(() => {
          cy.get('a')
            .should('contain', 'Email alex.hipolito')
            .should('contain', 'LinkedIn /alexhippo')
            .should('contain', 'Github /alexhippo')
            .should('contain', 'freeCodeCamp /alexhippo')
            .should('have.attr', 'href')
        })
    });
  });

  context('iPad mini resolution', () => {
    beforeEach(() => {
      cy.viewport('ipad-mini')
    })

    it('should render the Hero component', () => {
      cy.get('#hero')
        .should('be.visible');

      cy.get('.title')
        .should('be.visible');

      cy.get('.subtitle')
        .should('be.visible');

      cy.get('.heroImage')
        .should('be.visible');
    });

    it('should render the mobile navigation menu', () => {
      cy.get('.navbar-toggler-icon')
        .should('be.visible')
        .click()
        .then(() => {
          cy.get('a').each($a => {
            expect($a).to.have.attr("href");
          })
        })
    });

    it('should render the About component', () => {
      cy.get('#about')
        .should('be.visible');

      cy.get('.description > .gatsby-image-wrapper > picture > img')
        .should('be.visible');

      cy.get('.description')
        .should('be.visible');
    });

    it('should render the Portfolio component', () => {
      cy.get('#portfolio')
        .should('be.visible')
        .within(() => {
          cy.get('.portfolioCard')
            .should('be.visible');

          cy.get('a').each($a => {
            expect($a).to.have.attr("href");
          })
        })
    });

    it('should render the Resume component', () => {
      cy.get('#resume')
        .should('be.visible')
        .within(() => {
          cy.get('a')
            .should('contain', 'download résumé in PDF format')
        })
    });

    it('should render the Contact component', () => {
      cy.get('#contact')
        .should('be.visible')
        .within(() => {
          cy.get('a')
            .should('contain', 'Email alex.hipolito')
            .should('contain', 'LinkedIn /alexhippo')
            .should('contain', 'Github /alexhippo')
            .should('contain', 'freeCodeCamp /alexhippo')
            .should('have.attr', 'href')
        })
    });
  });

  context('iPhone XR resolution', () => {
    beforeEach(() => {
      cy.viewport('iphone-xr')
    })

    it('should render the Hero component', () => {
      cy.get('#hero')
        .should('be.visible');

      cy.get('.title')
        .should('be.visible');

      cy.get('.subtitle')
        .should('be.visible');

      cy.get('.heroImage')
        .should('be.visible');
    });

    it('should render the mobile navigation menu', () => {
      cy.get('.navbar-toggler-icon')
        .should('be.visible')
        .click()
        .then(() => {
          cy.get('a').each($a => {
            expect($a).to.have.attr("href");
          })
        })
    });

    it('should render the About component', () => {
      cy.get('#about')
        .should('be.visible');

      cy.get('.description > .gatsby-image-wrapper > picture > img')
        .should('be.visible');

      cy.get('.description')
        .should('be.visible');
    });

    it('should render the Portfolio component', () => {
      cy.get('#portfolio')
        .should('be.visible')
        .within(() => {
          cy.get('.portfolioCard')
            .should('be.visible');

          cy.get('a').each($a => {
            expect($a).to.have.attr("href");
          })
        })
    });

    it('should render the Resume component', () => {
      cy.get('#resume')
        .should('be.visible')
        .within(() => {
          cy.get('a')
            .should('contain', 'download résumé in PDF format')
        })
    });

    it('should render the Contact component', () => {
      cy.get('#contact')
        .should('be.visible')
        .within(() => {
          cy.get('a')
            .should('contain', 'Email alex.hipolito')
            .should('contain', 'LinkedIn /alexhippo')
            .should('contain', 'Github /alexhippo')
            .should('contain', 'freeCodeCamp /alexhippo')
            .should('have.attr', 'href')
        })
    });
  });

  context('Samsung S10 resolution', () => {
    beforeEach(() => {
      cy.viewport('samsung-s10')
    })

    it('should render the Hero component', () => {
      cy.get('#hero')
        .should('be.visible');

      cy.get('.title')
        .should('be.visible');

      cy.get('.subtitle')
        .should('be.visible');

      cy.get('.heroImage')
        .should('be.visible');
    });

    it('should render the mobile navigation menu', () => {
      cy.get('.navbar-toggler-icon')
        .should('be.visible')
        .click()
        .then(() => {
          cy.get('a').each($a => {
            expect($a).to.have.attr("href");
          })
        })
    });

    it('should render the About component', () => {
      cy.get('#about')
        .should('be.visible');

      cy.get('.description > .gatsby-image-wrapper > picture > img')
        .should('be.visible');

      cy.get('.description')
        .should('be.visible');
    });

    it('should render the Portfolio component', () => {
      cy.get('#portfolio')
        .should('be.visible')
        .within(() => {
          cy.get('.portfolioCard')
            .should('be.visible');

          cy.get('a').each($a => {
            expect($a).to.have.attr("href");
          })
        })
    });

    it('should render the Resume component', () => {
      cy.get('#resume')
        .should('be.visible')
        .within(() => {
          cy.get('a')
            .should('contain', 'download résumé in PDF format')
        })
    });

    it('should render the Contact component', () => {
      cy.get('#contact')
        .should('be.visible')
        .within(() => {
          cy.get('a')
            .should('contain', 'Email alex.hipolito')
            .should('contain', 'LinkedIn /alexhippo')
            .should('contain', 'Github /alexhippo')
            .should('contain', 'freeCodeCamp /alexhippo')
            .should('have.attr', 'href')
        })
    });
  });

});