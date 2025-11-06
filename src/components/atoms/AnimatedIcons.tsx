import { useState } from 'react'
import {
    Heart,
    Star,
    Zap,
    Bell,
    Mail,
    Sun,
    Moon,
    Coffee,
    Music,
    Camera,
} from 'lucide-react'

const AnimatedIcons = () => {
    const [activeIcon, setActiveIcon] = useState<string | null>(null)

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-8">
            <div className="mx-auto max-w-6xl">
                <h1 className="mb-4 text-center text-4xl font-bold text-white">
                    Animated Icons Collection
                </h1>
                <p className="mb-12 text-center text-blue-200">
                    Hover atau klik icon untuk melihat animasi
                </p>

                <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
                    {/* Bouncing Heart */}
                    <div className="flex flex-col items-center gap-3">
                        <div
                            className="flex h-20 w-20 transform animate-bounce cursor-pointer items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-red-500 transition-all duration-300 hover:scale-110 hover:rotate-12"
                            onMouseEnter={() => setActiveIcon('heart')}
                            onMouseLeave={() => setActiveIcon(null)}
                        >
                            <Heart
                                className={`text-white transition-all duration-300 ${
                                    activeIcon === 'heart'
                                        ? 'scale-125 fill-white'
                                        : ''
                                }`}
                                size={32}
                            />
                        </div>
                        <span className="text-sm text-white">
                            Bouncing Heart
                        </span>
                    </div>

                    {/* Spinning Star */}
                    <div className="flex flex-col items-center gap-3">
                        <div
                            className="flex h-20 w-20 transform cursor-pointer items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 transition-all duration-500 hover:rotate-180"
                            onMouseEnter={() => setActiveIcon('star')}
                            onMouseLeave={() => setActiveIcon(null)}
                        >
                            <Star
                                className={`text-white transition-all duration-500 ${
                                    activeIcon === 'star'
                                        ? 'rotate-180 fill-white'
                                        : ''
                                }`}
                                size={32}
                            />
                        </div>
                        <span className="text-sm text-white">
                            Spinning Star
                        </span>
                    </div>

                    {/* Pulse Zap */}
                    <div className="flex flex-col items-center gap-3">
                        <div
                            className="flex h-20 w-20 animate-pulse cursor-pointer items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 hover:animate-none"
                            onMouseEnter={() => setActiveIcon('zap')}
                            onMouseLeave={() => setActiveIcon(null)}
                        >
                            <Zap
                                className={`text-white transition-all duration-300 ${
                                    activeIcon === 'zap'
                                        ? 'scale-150 fill-white'
                                        : ''
                                }`}
                                size={32}
                            />
                        </div>
                        <span className="text-sm text-white">Pulse Zap</span>
                    </div>

                    {/* Swing Bell */}
                    <div className="flex flex-col items-center gap-3">
                        <div
                            className="flex h-20 w-20 transform cursor-pointer items-center justify-center rounded-2xl bg-gradient-to-br from-green-400 to-emerald-600 transition-all duration-300 hover:scale-110"
                            onMouseEnter={() => setActiveIcon('bell')}
                            onMouseLeave={() => setActiveIcon(null)}
                        >
                            <Bell
                                className={`text-white transition-all duration-200 ${
                                    activeIcon === 'bell' ? 'animate-pulse' : ''
                                }`}
                                size={32}
                                style={{
                                    animation:
                                        activeIcon === 'bell'
                                            ? 'swing 0.5s ease-in-out infinite'
                                            : 'none',
                                }}
                            />
                        </div>
                        <span className="text-sm text-white">Swing Bell</span>
                    </div>

                    {/* Floating Mail */}
                    <div className="flex flex-col items-center gap-3">
                        <div
                            className="flex h-20 w-20 transform cursor-pointer items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 transition-all duration-500"
                            onMouseEnter={() => setActiveIcon('mail')}
                            onMouseLeave={() => setActiveIcon(null)}
                            style={{
                                animation:
                                    activeIcon === 'mail'
                                        ? 'float 2s ease-in-out infinite'
                                        : 'none',
                            }}
                        >
                            <Mail className="text-white" size={32} />
                        </div>
                        <span className="text-sm text-white">
                            Floating Mail
                        </span>
                    </div>

                    {/* Rotating Sun/Moon */}
                    <div className="flex flex-col items-center gap-3">
                        <div
                            className="flex h-20 w-20 transform cursor-pointer items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-yellow-500 transition-all duration-700 hover:bg-gradient-to-br hover:from-indigo-600 hover:to-purple-700"
                            onClick={() =>
                                setActiveIcon(
                                    activeIcon === 'sun' ? 'moon' : 'sun'
                                )
                            }
                        >
                            {activeIcon === 'moon' ? (
                                <Moon
                                    className="animate-spin text-white"
                                    size={32}
                                />
                            ) : (
                                <Sun className="text-white" size={32} />
                            )}
                        </div>
                        <span className="text-sm text-white">
                            Sun/Moon Toggle
                        </span>
                    </div>

                    {/* Shake Coffee */}
                    <div className="flex flex-col items-center gap-3">
                        <div
                            className="flex h-20 w-20 cursor-pointer items-center justify-center rounded-2xl bg-gradient-to-br from-amber-700 to-orange-800"
                            onMouseEnter={() => setActiveIcon('coffee')}
                            onMouseLeave={() => setActiveIcon(null)}
                            style={{
                                animation:
                                    activeIcon === 'coffee'
                                        ? 'shake 0.5s ease-in-out'
                                        : 'none',
                            }}
                        >
                            <Coffee className="text-white" size={32} />
                        </div>
                        <span className="text-sm text-white">Shake Coffee</span>
                    </div>

                    {/* Wave Music */}
                    <div className="flex flex-col items-center gap-3">
                        <div
                            className="flex h-20 w-20 cursor-pointer items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-pink-600"
                            onMouseEnter={() => setActiveIcon('music')}
                            onMouseLeave={() => setActiveIcon(null)}
                        >
                            <Music
                                className="text-white transition-all duration-300"
                                size={32}
                                style={{
                                    animation:
                                        activeIcon === 'music'
                                            ? 'wave 1s ease-in-out infinite'
                                            : 'none',
                                }}
                            />
                        </div>
                        <span className="text-sm text-white">Wave Music</span>
                    </div>

                    {/* Flash Camera */}
                    <div className="flex flex-col items-center gap-3">
                        <div
                            className={`flex h-20 w-20 cursor-pointer items-center justify-center rounded-2xl bg-gradient-to-br from-slate-600 to-gray-800 transition-all duration-200 ${
                                activeIcon === 'camera' ? 'bg-white' : ''
                            }`}
                            onMouseEnter={() => setActiveIcon('camera')}
                            onMouseLeave={() => setActiveIcon(null)}
                        >
                            <Camera
                                className={`transition-all duration-200 ${
                                    activeIcon === 'camera'
                                        ? 'scale-90 text-gray-800'
                                        : 'text-white'
                                }`}
                                size={32}
                            />
                        </div>
                        <span className="text-sm text-white">Flash Camera</span>
                    </div>

                    {/* Wiggle Star */}
                    <div className="flex flex-col items-center gap-3">
                        <div
                            className="flex h-20 w-20 cursor-pointer items-center justify-center rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-600"
                            onMouseEnter={() => setActiveIcon('wiggle')}
                            onMouseLeave={() => setActiveIcon(null)}
                        >
                            <Star
                                className="fill-white text-white"
                                size={32}
                                style={{
                                    animation:
                                        activeIcon === 'wiggle'
                                            ? 'wiggle 0.5s ease-in-out infinite'
                                            : 'none',
                                }}
                            />
                        </div>
                        <span className="text-sm text-white">Wiggle Star</span>
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes swing {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(15deg); }
          75% { transform: rotate(-15deg); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px) rotate(-5deg); }
          75% { transform: translateX(10px) rotate(5deg); }
        }

        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-15deg); }
          75% { transform: rotate(15deg); }
        }

        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg) scale(1); }
          25% { transform: rotate(-10deg) scale(1.1); }
          50% { transform: rotate(10deg) scale(1.1); }
          75% { transform: rotate(-10deg) scale(1.1); }
        }
      `}</style>
        </div>
    )
}

export default AnimatedIcons
