"use client";

import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-primary/[0.08]",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-primary/[0.15]",
            "shadow-[0_8px_32px_0_rgba(59,130,246,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.2),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

function HeroGeometric({
  badge = "Premium Technology Solutions",
  title1 = "Elevate Your Digital",
  title2 = "Experience",
  description = "Delivering high-speed internet, advanced surveillance systems, and quality refurbished laptops for your business and home.",
}: {
  badge?: string;
  title1?: string;
  title2?: string;
  description?: string;
}) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-light/30 via-background to-secondary-light/30">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.05),transparent_50%)] blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(20,184,166,0.05),transparent_50%)] blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-primary/[0.15]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />

        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-secondary/[0.15]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />

        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-accent/[0.15]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />

        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-primary/[0.2]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />

        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-secondary/[0.2]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 1,
              delay: 0.5,
              ease: [0.25, 0.4, 0.25, 1],
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/[0.05] border border-primary/[0.15] mb-8 md:mb-12 hover:bg-primary/[0.08] transition-colors"
          >
            <Circle className="h-2 w-2 fill-primary" />
            <span className="text-sm text-foreground/80 tracking-wide font-medium">
              {badge}
            </span>
          </motion.div>

          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 1,
              delay: 0.7,
              ease: [0.25, 0.4, 0.25, 1],
            }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 tracking-tight leading-tight">
              <span className="text-foreground">
                {title1}
              </span>
              <br />
              <span className="text-gradient-primary">
                {title2}
              </span>
            </h1>
          </motion.div>

          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 1,
              delay: 0.9,
              ease: [0.25, 0.4, 0.25, 1],
            }}
          >
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 md:mb-12 leading-relaxed font-normal max-w-2xl mx-auto px-4">
              {description}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60 pointer-events-none" />
    </div>
  );
}

export { HeroGeometric };
