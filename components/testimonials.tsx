// "use client"

// import { motion } from "framer-motion"
// import { Card, CardContent } from "@/components/ui/card"
// import { Quote } from "lucide-react"
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

// export default function Testimonials() {
//   const testimonials = [
//     {
//       id: 1,
//       name: "Sarah Johnson",
//       position: "Project Manager at TechSolutions",
//       image: "/placeholder.svg?height=100&width=100",
//       quote:
//         "Alex is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills make him a valuable asset to any team. He's not only technically proficient but also great at communicating complex concepts to non-technical stakeholders.",
//     },
//     {
//       id: 2,
//       name: "Michael Chen",
//       position: "Senior Developer at WebCraft",
//       image: "/placeholder.svg?height=100&width=100",
//       quote:
//         "Working with Alex was a pleasure. He's quick to learn new technologies and approaches challenges with creativity and determination. His code is clean, well-documented, and follows best practices. I was particularly impressed with his ability to optimize performance in our React applications.",
//     },
//     {
//       id: 3,
//       name: "Emily Rodriguez",
//       position: "UX Designer at InnovateTech",
//       image: "/placeholder.svg?height=100&width=100",
//       quote:
//         "Alex has a great eye for detail and a deep understanding of user experience. He was able to take my designs and implement them flawlessly, often suggesting improvements that enhanced the overall user experience. His collaborative approach made our projects run smoothly.",
//     },
//     {
//       id: 4,
//       name: "David Kim",
//       position: "CTO at StartupX",
//       image: "/placeholder.svg?height=100&width=100",
//       quote:
//         "We hired Alex as a freelancer for a critical project with a tight deadline. Not only did he deliver on time, but the quality of his work exceeded our expectations. He's proactive, communicative, and technically skilled. I wouldn't hesitate to work with him again.",
//     },
//   ]

//   return (
//     <div className="container mx-auto">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5 }}
//       >
//         <h2 className="text-3xl font-bold mb-2">Testimonials</h2>
//         <div className="w-20 h-1 bg-primary mb-8"></div>

//         <div className="hidden md:block">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {testimonials.map((testimonial) => (
//               <TestimonialCard key={testimonial.id} testimonial={testimonial} />
//             ))}
//           </div>
//         </div>

//         <div className="md:hidden">
//           <Carousel className="w-full">
//             <CarouselContent>
//               {testimonials.map((testimonial) => (
//                 <CarouselItem key={testimonial.id}>
//                   <TestimonialCard testimonial={testimonial} />
//                 </CarouselItem>
//               ))}
//             </CarouselContent>
//             <div className="flex justify-center mt-4">
//               <CarouselPrevious className="mr-2" />
//               <CarouselNext />
//             </div>
//           </Carousel>
//         </div>
//       </motion.div>
//     </div>
//   )
// }

// function TestimonialCard({ testimonial }: { testimonial: any }) {
//   return (
//     <Card className="h-full">
//       <CardContent className="pt-6 h-full flex flex-col">
//         <div className="mb-4">
//           <Quote className="h-8 w-8 text-primary/40" />
//         </div>
//         <p className="italic mb-6 flex-grow">{testimonial.quote}</p>
//         <div className="flex items-center">
//           <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
//             <img
//               src={testimonial.image || "/placeholder.svg"}
//               alt={testimonial.name}
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <div>
//             <h4 className="font-semibold">{testimonial.name}</h4>
//             <p className="text-sm text-muted-foreground">{testimonial.position}</p>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   )
// }

