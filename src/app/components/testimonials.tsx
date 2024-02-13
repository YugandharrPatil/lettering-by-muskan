import { testimonials } from "@/testimonials";
import { Gwendolyn } from "next/font/google";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

const gwendolyn = Gwendolyn({
  weight: "700",
  subsets: ["latin"],
});

export default function Testimonials() {
  return (
    <main className="bg-purplMedium py-4">
      <div
        className="
      container"
      >
        <h1
          className={`${gwendolyn.className}  my-8 text-center text-5xl font-bold text-purple-900`}
        >
          Testimonials
        </h1>
        <div className="flex gap-4 max-lg:flex-wrap">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-purplLight">
              <CardHeader>
                <CardTitle>{testimonial.name}</CardTitle>
                {/* <CardDescription>Card Description</CardDescription> */}
              </CardHeader>
              <CardContent>
                <p>{testimonial.body}</p>
              </CardContent>
              <CardFooter>
                <p>- {testimonial.client}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
