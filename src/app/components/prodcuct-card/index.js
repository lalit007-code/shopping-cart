"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AppRouter from "next/dist/client/components/app-router";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProductCard({ item }) {
  const router = useRouter();
  return (
    <div>
      <Card>
        <CardContent>
          <div className="w-full aspect-w-16 aspect-h-8 lg:h-80 ">
            <img
              src={item?.thumbnail}
              alt={item?.thumbnail}
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div className=" ">
            <CardTitle className="text-lg font-bold text-gray-900">
              {item?.title}
            </CardTitle>
            <div className="mt-4 flex justify-between items-center flex-wrap gap-2 ">
              <p className="text-lg font-extrabold text-gray-800">
                {item?.price}
              </p>
              <Button onClick={() => router.push(`/${item?.id}`)}>
                Details
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
