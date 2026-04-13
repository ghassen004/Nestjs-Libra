# 📚 Libra

> Application web de gestion de bibliothèque — livres, auteurs et favoris.

---

## ✦ Features

- 🔐 Authentification (inscription / connexion) avec JWT
- 📚 Gestion des livres (ajout, modification, suppression)
- ✍️ Gestion des auteurs
- ♡ Système de favoris par utilisateur
- 📊 Dashboard admin (total utilisateurs, favoris, livres les plus aimés)
- 🛡️ Accès admin protégé par guards NestJS

---

## 🛠️ Stack technique

| Côté | Technologie |
|------|-------------|
| Frontend | Vue 3, Pinia, Vue Router, Axios |
| Backend | NestJS, TypeORM, JWT, Bcrypt |
| Base de données | MySQL / PostgreSQL |

---

## 🚀 Installation & Setup

### Prérequis

- Node.js >= 18
- npm >= 9
- MySQL ou PostgreSQL en cours d'exécution

---

### Backend (NestJS)

```bash
cd Nestjs-libra
npm install
```

Créer le fichier `.env` :

```env
JWT_SECRET=your_secret_key
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=your_password
DB_NAME=libra
```

Lancer le serveur :

```bash
npm run start:dev
```

> Le backend tourne sur **http://localhost:3000**

---

### Frontend (Vue 3)

```bash
cd Vuejs
npm install
npm run dev
```

> Le frontend tourne sur **http://localhost:5173**

---

## 👥 Contributeurs

| Nom | Rôle |
|-----|------|
| **Ghassen Rached** | étudiant 1M ISIDS  |
| **Houssem Bjaoui** | étudiant 1M ISIDS  |

---

> Projet réalisé dans le cadre de la matiere nouvelles tech web
