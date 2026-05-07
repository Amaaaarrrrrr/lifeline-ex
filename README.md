# LifeLine - Frontend

Medical emergency services platform.

## Integration with Backend

This application is pre-configured to work with a Django/REST API backend.

- **Base URL**: Configured in `.env` as `VITE_API_BASE_URL`.
- **Authentication**: Uses Bearer Token (JWT).
- **Onboarding**: Multi-step flow for capturing user medical and contact information.

### Endpoints

- Auth: `/api/auth/register/`, `/api/auth/login/`, `/api/auth/forgot-password/`, etc.
- Onboarding: `/api/onboarding/basic-info/`, etc.

### Tech Stack

- React + Vite
- Tailwind CSS
- React Hook Form
- Axios
- Framer Motion
