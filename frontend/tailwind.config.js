/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // CC Club 主色 - 霓虹紫
        primary: {
          50: '#F4EBFF',
          100: '#E5D4FF',
          200: '#CFA8FF',
          300: '#BC85FF',
          400: '#B266FF',
          500: '#B847FF',
          600: '#9B2BE5',
          700: '#7C1FCC',
          800: '#5C16A6',
          900: '#3F0F73',
          950: '#2D1B4E'
        },
        // 辅助色 - 深蓝紫灰（暗黑赛博背景体系）
        accent: {
          50: '#F2EEFF',
          100: '#E0D8F5',
          200: '#C0B5DC',
          300: '#9D93B8',
          400: '#7E7396',
          500: '#665E80',
          600: '#4D4663',
          700: '#3A344D',
          800: '#262238',
          900: '#14101F',
          950: '#0A0612'
        },
        // 暗黑赛博 ink 色板（背景层）
        ink: {
          50: '#F2EEFF',
          100: '#E0D8F5',
          200: '#C0B5DC',
          300: '#9D93B8',
          400: '#7E7396',
          500: '#665E80',
          600: '#4D4663',
          700: '#3A344D',
          800: '#1F1830',
          900: '#14101F',
          950: '#0A0612'
        },
        // Claude 同源橘红（次 CTA / Premium 徽章）
        warm: {
          400: '#E89377',
          500: '#D97757',
          600: '#B85F44'
        },
        // 终端霓虹青（代码高亮 / 成功状态）
        cool: {
          400: '#33FFD9',
          500: '#00FFD1',
          600: '#00CCAA'
        },
        // dark 别名保留兼容现有代码
        dark: {
          50: '#F2EEFF',
          100: '#E0D8F5',
          200: '#C0B5DC',
          300: '#9D93B8',
          400: '#7E7396',
          500: '#665E80',
          600: '#4D4663',
          700: '#3A344D',
          800: '#1F1830',
          900: '#14101F',
          950: '#0A0612'
        }
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'PingFang SC',
          'Hiragino Sans GB',
          'Microsoft YaHei',
          'sans-serif'
        ],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace']
      },
      boxShadow: {
        glass: '0 8px 32px rgba(184, 71, 255, 0.10)',
        'glass-sm': '0 4px 16px rgba(184, 71, 255, 0.08)',
        glow: '0 0 20px rgba(184, 71, 255, 0.35)',
        'glow-lg': '0 0 40px rgba(184, 71, 255, 0.50)',
        'glow-warm': '0 0 24px rgba(217, 119, 87, 0.40)',
        'glow-cool': '0 0 24px rgba(0, 255, 209, 0.35)',
        card: '0 1px 3px rgba(0, 0, 0, 0.30), 0 1px 2px rgba(0, 0, 0, 0.40)',
        'card-hover': '0 10px 40px rgba(184, 71, 255, 0.20)',
        'inner-glow': 'inset 0 1px 0 rgba(184, 71, 255, 0.20)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #D97757 0%, #B847FF 100%)',
        'gradient-dark': 'linear-gradient(135deg, #1F1830 0%, #0A0612 100%)',
        'gradient-glass':
          'linear-gradient(135deg, rgba(184,71,255,0.10) 0%, rgba(184,71,255,0.04) 100%)',
        'mesh-gradient':
          'radial-gradient(at 40% 20%, rgba(184, 71, 255, 0.18) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(217, 119, 87, 0.12) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(0, 255, 209, 0.08) 0px, transparent 50%)'
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        shimmer: 'shimmer 2s linear infinite',
        glow: 'glow 2s ease-in-out infinite alternate'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(184, 71, 255, 0.35)' },
          '100%': { boxShadow: '0 0 30px rgba(184, 71, 255, 0.55)' }
        }
      },
      backdropBlur: {
        xs: '2px'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    }
  },
  plugins: []
}
