# Taskjo - Freelancing Project Management Platform

A Django-based platform for managing and tracking freelancing projects from various websites.

## 🚀 Features

- **Project Management**: Track projects from multiple freelancing websites
- **Skill Management**: Organize and track user skills
- **Advanced Search**: Filter projects by skills, budget, category, and more
- **User Dashboard**: Personalized project recommendations
- **Phone-based Authentication**: Secure login with OTP verification
- **Multi-language Support**: Persian/Farsi interface
- **Real-time Updates**: Celery-based background tasks

## 🛠️ Technology Stack

- **Backend**: Django 3.2
- **Database**: PostgreSQL
- **Cache/Queue**: Redis
- **Task Queue**: Celery
- **Authentication**: Custom phone-based auth
- **Frontend**: Bootstrap, jQuery
- **Deployment**: Docker, Nginx

## 📋 Prerequisites

- Python 3.8+
- PostgreSQL
- Redis
- Docker (optional)

## 🔧 Installation

### 1. Clone the Repository
```bash
git clone <repository-url>
cd taskjo
```

### 2. Set Up Environment Variables
```bash
cp .env.example .env
# Edit .env with your configuration
```

### 3. Install Dependencies
```bash
pip install -r requirements.txt
```

### 4. Database Setup
```bash
python manage.py makemigrations
python manage.py migrate
```

### 5. Create Superuser
```bash
python manage.py createsuperuser
```

### 6. Run Development Server
```bash
python manage.py runserver
```

## 🐳 Docker Deployment

### Development
```bash
docker-compose up --build
```

### Production
```bash
docker-compose -f docker-compose.prod.yml up --build
```

## 📁 Project Structure

```
taskjo/
├── accounts/          # User authentication and profiles
├── core/             # Main application logic
│   ├── models.py     # Database models
│   ├── views.py      # View logic
│   ├── forms.py      # Form definitions
│   ├── admin.py      # Admin interface
│   ├── spider.py     # Web scraping logic
│   └── utils/        # Utility functions
├── taskjo_ponisha/   # Ponisha-specific functionality
├── static/           # Static files
├── templates/        # HTML templates
└── media/           # User uploads
```

## 🔐 Security Improvements Made

1. **Environment Variables**: Moved sensitive data to environment variables
2. **Input Validation**: Added proper form and model validation
3. **Error Handling**: Comprehensive error handling and logging
4. **SQL Injection Prevention**: Proper query building
5. **File Upload Security**: Image validation and size limits

## 🚀 Performance Improvements

1. **Database Optimization**: Added indexes and optimized queries
2. **Query Optimization**: Used select_related and prefetch_related
3. **Caching**: Redis integration for caching
4. **Pagination**: Efficient pagination for large datasets
5. **Background Tasks**: Celery for heavy operations

## 📊 Database Models

### Core Models
- **Website**: Freelancing websites (Ponisha, etc.)
- **Category**: Project categories
- **Skill**: Technical skills
- **Employer**: Project employers
- **Freelancer**: Freelancers
- **Project**: Main project entity

### User Model
- **CustomUser**: Phone-based authentication
- **Skills**: Many-to-many relationship
- **Projects**: User's saved projects

## 🔧 Configuration

### Environment Variables
```bash
# Django
SECRET_KEY=your-secret-key
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1

# Database
DB_NAME=taskjo_db
DB_USER=taskjo_user
DB_PASSWORD=your-password
DB_HOST=localhost
DB_PORT=5432

# Redis
REDIS_URL=redis://localhost:6379

# Email
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USE_TLS=True
EMAIL_HOST_USER=your-email@gmail.com
EMAIL_HOST_PASSWORD=your-password

# SMS Gateway
SMSIR_USER_API_KEY=your-api-key
SMSIR_SECRET_KEY=your-secret-key
FAKE_SMS=True
```

## 🧪 Testing

```bash
# Run tests
python manage.py test

# Run with coverage
coverage run --source='.' manage.py test
coverage report
```

## 📝 API Endpoints

### Authentication
- `POST /accounts/login/` - Phone-based login
- `POST /accounts/verify/` - OTP verification
- `POST /accounts/logout/` - Logout

### Projects
- `GET /projects/` - List projects
- `GET /projects/<id>/` - Project details
- `POST /projects/add/` - Add project to user list
- `DELETE /projects/remove/` - Remove project from user list

### Search
- `GET /search/` - Advanced search
- `GET /search/ajax/` - AJAX search results

## 🔄 Background Tasks

### Celery Tasks
- Project scraping from external websites
- Email notifications
- SMS notifications
- Data cleanup and maintenance

### Running Celery
```bash
# Start Celery worker
celery -A taskjo worker -l info

# Start Celery beat (scheduler)
celery -A taskjo beat -l info
```

## 🚀 Deployment Checklist

- [ ] Set `DEBUG=False` in production
- [ ] Configure proper `ALLOWED_HOSTS`
- [ ] Set up SSL/HTTPS
- [ ] Configure database backups
- [ ] Set up monitoring and logging
- [ ] Configure static file serving
- [ ] Set up email backend
- [ ] Configure SMS gateway
- [ ] Set up Redis for caching
- [ ] Configure Celery workers

## 🐛 Common Issues

### Database Connection
- Ensure PostgreSQL is running
- Check database credentials in `.env`
- Verify database exists

### Redis Connection
- Ensure Redis is running
- Check Redis URL in `.env`
- Verify Redis port accessibility

### Static Files
- Run `python manage.py collectstatic`
- Configure static file serving in production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue on GitHub
- Contact the development team
- Check the documentation

## 🔄 Recent Improvements

### Code Quality
- ✅ Fixed model naming inconsistencies
- ✅ Added proper validation and error handling
- ✅ Improved query optimization
- ✅ Enhanced security measures
- ✅ Added comprehensive logging
- ✅ Fixed form validation issues

### Performance
- ✅ Optimized database queries
- ✅ Added proper indexing
- ✅ Implemented efficient pagination
- ✅ Reduced N+1 query problems
- ✅ Added caching strategies

### Security
- ✅ Environment variable configuration
- ✅ Input validation and sanitization
- ✅ File upload security
- ✅ SQL injection prevention
- ✅ XSS protection

### User Experience
- ✅ Better error messages
- ✅ Improved form handling
- ✅ Enhanced admin interface
- ✅ Responsive design improvements