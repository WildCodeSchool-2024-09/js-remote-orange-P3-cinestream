-- utilisateur
CREATE TABLE utilisateur (
  id INT AUTO_INCREMENT PRIMARY KEY,
  mail VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  speudo VARCHAR(255) NOT NULL,
  photo_profil VARCHAR(255) DEFAULT NULL,
  is_admin TINYINT(1) DEFAULT 0,
  date_inscription DATE NOT NULL
);

-- abonement
CREATE TABLE abonement (
  id INT AUTO_INCREMENT PRIMARY KEY,
  actif TINYINT(1) DEFAULT 0,
  date_fin DATE DEFAULT NULL,
  utilisateur_id INT,
  FOREIGN KEY (utilisateur_id) REFERENCES utilisateur(id)
);

-- univers
CREATE TABLE univers (
  id INT AUTO_INCREMENT PRIMARY KEY
);

-- article
CREATE TABLE article (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(255) DEFAULT "sans nom",
  date DATE DEFAULT NULL,
  image VARCHAR(255) DEFAULT NULL,
  image_rectangle VARCHAR(255) DEFAULT NULL,
  publier TINYINT(1) DEFAULT 0,
  premium TINYINT(1) DEFAULT 0,
  type VARCHAR(10) NOT NULL,
  univers_numero INT DEFAULT NULL,
  univers_id INT DEFAULT NULL,
  FOREIGN KEY (univers_id) REFERENCES univers(id) ON DELETE SET NULL
);

-- favorie
CREATE TABLE favorie (
  article_id INT,
  utilisateur_id INT,
  date_ajout TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (article_id, utilisateur_id),
  FOREIGN KEY (article_id) REFERENCES article(id) ON DELETE CASCADE,
  FOREIGN KEY (utilisateur_id) REFERENCES utilisateur(id) ON DELETE CASCADE
);

-- commentaire
CREATE TABLE commentaire (
  article_id INT,
  utilisateur_id INT,
  contenu TEXT NOT NULL,
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (article_id, utilisateur_id),
  FOREIGN KEY (article_id) REFERENCES article(id) ON DELETE CASCADE,
  FOREIGN KEY (utilisateur_id) REFERENCES utilisateur(id) ON DELETE CASCADE
);

-- notes
CREATE TABLE notes (
  article_id INT,
  utilisateur_id INT,
  valeur DECIMAL(3, 1) NOT NULL,
  PRIMARY KEY (article_id, utilisateur_id),
  FOREIGN KEY (article_id) REFERENCES article(id) ON DELETE CASCADE,
  FOREIGN KEY (utilisateur_id) REFERENCES utilisateur(id) ON DELETE CASCADE,
  CHECK (valeur >= 0.5 AND valeur <= 5 AND valeur = ROUND(valeur, 1))
);


-- saison
CREATE TABLE saison  (
    id INT AUTO_INCREMENT PRIMARY KEY,
    numero INT NOT NULL,
    article_id INT NOT NULL,
    FOREIGN KEY (article_id) REFERENCES article(id) ON DELETE CASCADE
);

-- episode
CREATE TABLE episode (
    id INT AUTO_INCREMENT PRIMARY KEY,
    numero INT NOT NULL,
    nom VARCHAR(255) DEFAULT "",
    description TEXT DEFAULT NULL,
    lien_video VARCHAR(255) DEFAULT "",
    image VARCHAR(255) DEFAULT NULL,
    saison_id INT NOT NULL,
    FOREIGN KEY (saison_id) REFERENCES saison(id) ON DELETE CASCADE
);

-- plateforme
CREATE TABLE plateforme (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    image VARCHAR(255)
);

-- categorie
CREATE TABLE categorie (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    image VARCHAR(255)
);

-- plateforme_article
CREATE TABLE plateforme_article (
    article_id INT NOT NULL,
    plateforme_id INT NOT NULL,
    PRIMARY KEY (article_id, plateforme_id),
    FOREIGN KEY (article_id) REFERENCES article(id) ON DELETE CASCADE,
    FOREIGN KEY (plateforme_id) REFERENCES plateforme(id) ON DELETE CASCADE
);

-- categorie_article
CREATE TABLE categorie_article (
    article_id INT NOT NULL,
    categorie_id INT NOT NULL,
    PRIMARY KEY (article_id, categorie_id),
    FOREIGN KEY (article_id) REFERENCES article(id) ON DELETE CASCADE,
    FOREIGN KEY (categorie_id) REFERENCES categorie(id) ON DELETE CASCADE
);


CREATE TABLE token_serveur(
    id INT AUTO_INCREMENT PRIMARY KEY,
    token VARCHAR(255) NOT NULL
);



-- valeurs par défaut
INSERT INTO categorie (nom)
VALUES 
  ('Action'), 
  ('Aventure'), 
  ('Comédie'), 
  ('Drame'), 
  ('Fantastique'), 
  ('Horreur'), 
  ('Policier'), 
  ('Science-fiction'), 
  ('Thriller'), 
  ('Western'), 
  ('Animation'), 
  ('Documentaire'), 
  ('Biopic'), 
  ('Historique'), 
  ('Musical'), 
  ('Romance'), 
  ('Guerre'), 
  ('Sport'), 
  ('Famille'), 
  ('Jeunesse'), 
  ('Adulte'), 
  ('Manga'), 
  ('Anime'), 
  ('Web-série'), 
  ('Télé-réalité'), 
  ('Talk-show'), 
  ('Variété'), 
  ('Emission');

INSERT INTO plateforme (nom, image)
VALUES 
  ("netflix", "logo_producteur/logo_Netflix.png"),
  ("disney+", "logo_producteur/logo_disney+.png"),
  ("amazon prime", "logo_producteur/logo_primeVideo.png"),
  ("mycanal", "logo_producteur/logo_myCanal.png"),
  ("apple tv", "logo_producteur/logo_appelTv.png"),
  ("hulu", "logo_producteur/logo_hulu.png"),
  ("youtube", "logo_producteur/logo_youTube.png"),
  ("twitch", "logo_producteur/logo_twitch.png"),
  ("site externe", "logo_producteur/logo_siteInernette.png"),
  ("autre", "logo_producteur/logo_autre.png");
