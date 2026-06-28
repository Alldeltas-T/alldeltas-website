import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from 'react-router-dom'
import { Mail, Lock, User, ArrowRight, ShieldCheck, Eye, EyeOff } from 'lucide-react'

const Auth = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  
  // حالة لمعرفة هل المستخدم في وضع "تسجيل الدخول" أم "إنشاء حساب"
  const [isLogin, setIsLogin] = useState(true)
  
  // حالة لإظهار أو إخفاء كلمة المرور
  const [showPassword, setShowPassword] = useState(false)
  
  // بيانات النموذج
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // هنا مستقبلاً يتم ربط الكود بقاعدة البيانات (API)
    console.log('Submitted Data:', formData)
    
    // بعد النجاح، نأخذ المستخدم للصفحة الرئيسية
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-[var(--bg-secondary)] pt-32 pb-16 flex items-center justify-center px-4 relative overflow-hidden">
      
      {/* خلفية جمالية متناسقة مع ألوان موقعكِ الدائرية */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#1E4A76]/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#3A7CA5]/10 blur-[120px] pointer-events-none"></div>

      <div className="w-full max-w-md z-10">
        {/* الكرت الرئيسي للنموذج */}
        <div className="bg-[var(--bg-card)] border border-[var(--border-light)] rounded-2xl shadow-xl overflow-hidden backdrop-blur-sm transition-all duration-300">
          
          {/* الخط الملون العلوي المطابق لـ Solutions */}
          <div className="w-full h-1 bg-gradient-to-r from-[#1E4A76] via-[#2A5F8A] to-[#3A7CA5]"></div>
          
          <div className="p-8">
            {/* رأس الصفحة والشعار النصي */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#1E4A76]/10 text-[#3A7CA5] mb-4">
                <ShieldCheck size={28} strokeWidth={1.5} />
              </div>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
                {isLogin ? t('auth.loginTitle', 'Welcome Back') : t('auth.registerTitle', 'Create Account')}
              </h2>
              <p className="text-sm text-[var(--text-secondary)]">
                {isLogin 
                  ? t('auth.loginSubtitle', 'Sign in to access your secure safety dashboard') 
                  : t('auth.registerSubtitle', 'Join Alldeltas Consulting network today')}
              </p>
            </div>

            {/* النموذج */}
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* حقل الاسم: يظهر فقط في حالة إنشاء الحساب */}
              {!isLogin && (
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
                    {t('auth.nameLabel', 'Full Name')}
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-[var(--text-secondary)]/60">
                      <User size={18} strokeWidth={1.5} />
                    </span>
                    <input
                      type="text"
                      name="name"
                      required={!isLogin}
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full pl-11 pr-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border-light)] rounded-xl text-sm text-[var(--text-primary)] placeholder-[var(--text-secondary)]/40 focus:outline-none focus:border-[#3A7CA5] focus:ring-1 focus:ring-[#3A7CA5] transition-all"
                    />
                  </div>
                </div>
              )}

              {/* حقل البريد الإلكتروني */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
                  {t('auth.emailLabel', 'Email Address')}
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-[var(--text-secondary)]/60">
                    <Mail size={18} strokeWidth={1.5} />
                  </span>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@alldeltas.com"
                    className="w-full pl-11 pr-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border-light)] rounded-xl text-sm text-[var(--text-primary)] placeholder-[var(--text-secondary)]/40 focus:outline-none focus:border-[#3A7CA5] focus:ring-1 focus:ring-[#3A7CA5] transition-all"
                  />
                </div>
              </div>

              {/* حقل كلمة المرور */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
                    {t('auth.passwordLabel', 'Password')}
                  </label>
                  {isLogin && (
                    <a href="#forgot" className="text-xs text-[#3A7CA5] hover:underline transition-all">
                      {t('auth.forgotPassword', 'Forgot?')}
                    </a>
                  )}
                </div>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-[var(--text-secondary)]/60">
                    <Lock size={18} strokeWidth={1.5} />
                  </span>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full pl-11 pr-10 py-3 bg-[var(--bg-secondary)] border border-[var(--border-light)] rounded-xl text-sm text-[var(--text-primary)] placeholder-[var(--text-secondary)]/40 focus:outline-none focus:border-[#3A7CA5] focus:ring-1 focus:ring-[#3A7CA5] transition-all"
                  />
                  {/* زر إظهار وإخفاء الباسورد */}
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-[var(--text-secondary)]/60 hover:text-[var(--text-primary)] transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* حقل تأكيد كلمة المرور: يظهر فقط في إنشاء الحساب */}
              {!isLogin && (
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
                    {t('auth.confirmPasswordLabel', 'Confirm Password')}
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-[var(--text-secondary)]/60">
                      <Lock size={18} strokeWidth={1.5} />
                    </span>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      required={!isLogin}
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="••••••••"
                      className="w-full pl-11 pr-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border-light)] rounded-xl text-sm text-[var(--text-primary)] placeholder-[var(--text-secondary)]/40 focus:outline-none focus:border-[#3A7CA5] focus:ring-1 focus:ring-[#3A7CA5] transition-all"
                    />
                  </div>
                </div>
              )}

              {/* زر الإرسال الرئيسي المتناسق مع تدرجات الهيدر */}
              <button
                type="submit"
                className="w-full mt-2 bg-gradient-to-r from-[#1E4A76] via-[#2A5F8A] to-[#3A7CA5] text-white py-3 px-4 rounded-xl font-medium text-sm hover:opacity-95 transition-all shadow-md flex items-center justify-center gap-2 group"
              >
                <span>{isLogin ? t('auth.loginBtn', 'Sign In') : t('auth.registerBtn', 'Get Started')}</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

            </form>

            {/* التبديل بين الحسابين السفلي */}
            <div className="mt-6 text-center text-sm">
              <span className="text-[var(--text-secondary)]">
                {isLogin ? t('auth.noAccount', "Don't have an account? ") : t('auth.haveAccount', 'Already have an account? ')}
              </span>
              <button
                onClick={() => {
                  setIsLogin(!isLogin)
                  setFormData({ name: '', email: '', password: '', confirmPassword: '' }) // تصغير النموذج عند الانتقال
                }}
                className="text-[#3A7CA5] font-semibold hover:underline transition-all ml-1"
              >
                {isLogin ? t('auth.switchToRegister', 'Create one') : t('auth.switchToLogin', 'Sign in')}
              </button>
            </div>

          </div>
        </div>

        {/* العودة للرئيسية */}
        <div className="text-center mt-6">
          <Link to="/" className="text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
            ← {t('auth.backToHome', 'Back to Homepage')}
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Auth