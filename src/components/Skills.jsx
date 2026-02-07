import { motion } from 'framer-motion';
import {
    Target,
    Users,
    BarChart3,
    FileSearch,
    PenTool,
    TrendingUp,
    Megaphone,
    LineChart,
    Layout
} from "lucide-react";

const skills = [
    { name: "Competitor Analysis", icon: FileSearch },
    { name: "Meta Ads", icon: Users },
    { name: "Google Analytics", icon: LineChart },
    { name: "WordPress", icon: Layout },
    { name: "Canva", icon: PenTool },
    { name: "Conversion Rate Opt.", icon: TrendingUp },
    { name: "Campaign Management", icon: Megaphone },
    { name: "Analysis & Reporting", icon: BarChart3 },
    { name: "Google Ads", icon: Target }
];


const Skills = () => {
    return (
        <section className="pt-20 bg-gray-900 text-white px-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-emerald-400">My Expertise</h2>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.15 } }
                    }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-20"
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
                            }}
                            whileHover={{ y: -5, rotateX: 5, rotateY: 5 }}
                            className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-emerald-500/50 transition-all duration-500 shadow-xl group perspective-1000 cursor-pointer"
                        >
                            <div className="bg-gradient-to-br from-gray-800 to-gray-900 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 border border-white/5 shadow-inner">
                                <skill.icon className="w-8 h-8 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
                            </div>
                            <h3 className="text-xl font-semibold text-center mb-2">{skill.name}</h3>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
