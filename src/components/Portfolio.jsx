import React, { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/3.jpg";
import img4 from "../assets/images/4.jpg";
import img5 from "../assets/images/5.jpg";
import img6 from "../assets/images/6.jpg";

const projects = [
    {
        title: "E-Commerce Fashion Brand",
        category: "Meta Ad Account",
        metrics: [
            { label: "ROAS", value: "26.39x" },
            { label: "Monthly Rev", value: "₹916594" },
            { label: "CPP", value: "₹261.14" }
        ],
        image: img1
    },
    {
        title: "Mobile Accessories",
        category: "Meta Ad Account",
        metrics: [
            { label: "ROAS", value: "4.69x" },
            { label: "Amount Spend", value: "₹233,128.31" },
            { label: "CPR", value: "₹200 appx." }
        ],
        image: img3
    },
    {
        title: "Clothing Fashion",
        category: "Meta Ad Account",
        metrics: [
            { label: "ROS", value: "3x" },
            { label: "Amount Spent", value: "₹284,837.72" },
            { label: "CPR", value: "₹500 appx." }
        ],
        image: img2
    },
    {
        title: "Footwear",
        category: "Meta Ad Account",
        metrics: [
            { label: "ROS", value: "4x" },
            { label: "Amount Spent", value: "$92,834.79" },
            { label: "CPR", value: "$30.31" }
        ],
        image: img4
    },
    {
        title: "Lead Generation",
        category: "Meta Ad Account",
        metrics: [
            { label: "Leads", value: "10k appx." },
            { label: "Amount Spent", value: "₹259,799" },
            { label: "CPR", value: "₹60 appx." }
        ],
        image: img5
    },
    {
        title: "Lead Generation",
        category: "Meta Ad Account",
        metrics: [
            { label: "Leads", value: "500+" },
            { label: "Amount Spent", value: "$2,587.52" },
            { label: "CPR", value: "$5 appx." }
        ],
        image: img6
    }
];


const Portfolio = () => {
    const [activeProject, setActiveProject] = useState(null);

    return (
        <section className="py-20 bg-black text-white px-8">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold mb-16 text-center text-emerald-400"
                >
                    Meta Projects
                </motion.h2>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{ visible: { transition: { staggerChildren: 0.25 } } }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
                                }
                            }}
                            onClick={() => setActiveProject(project)}
                            className="group cursor-pointer relative bg-gray-900/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-800 hover:border-emerald-500/50 transition-all duration-700 hover:shadow-2xl hover:shadow-emerald-500/10"
                        >
                            <div className="h-56 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10 opacity-60" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4 z-20">
                                    <span className="bg-black/60 backdrop-blur-md border border-white/10 text-emerald-400 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-6 flex items-center justify-between group-hover:text-emerald-400 transition-colors">
                                    {project.title}
                                    <span className="p-2 rounded-full bg-white/5 group-hover:bg-emerald-500/20 transition-colors">
                                        <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-emerald-400" />
                                    </span>
                                </h3>

                                <div className="grid grid-cols-3 gap-4 border-t border-gray-800/50 pt-6">
                                    {project.metrics.map((metric, i) => (
                                        <div key={i} className="text-center">
                                            <div className="text-lg font-bold">{metric.value}</div>
                                            <div className="text-xs text-gray-500 uppercase tracking-wide">
                                                {metric.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-20 text-center"
                >
                    <p className="text-lg uppercase tracking-[0.3em] text-gray-500">
                        Thank you for viewing
                    </p>
                    <div className="mt-4 flex justify-center">
                        <span className="h-px w-24 bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent" />
                    </div>
                </motion.div>

            </div>

            {/* 🔥 MODAL */}
            {/* 🔥 IMAGE MODAL */}
            <AnimatePresence>
                {activeProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
                        onClick={() => setActiveProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.95, y: 20 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-6xl w-full max-h-[90vh]"
                        >
                            <button
                                onClick={() => setActiveProject(null)}
                                className="absolute -top-4 -right-4 z-10 p-2 rounded-full bg-black/70 hover:bg-emerald-500/20 transition"
                            >
                                <X className="w-5 h-5 text-white" />
                            </button>

                            <img
                                src={activeProject.image}
                                alt={activeProject.title}
                                className="w-full h-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    );
};

export default Portfolio;
