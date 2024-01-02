import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function CourseCard({
  code,
  name,
  description,
  numOfAUs,
}: {
  code: string;
  name: string;
  description: string;
  numOfAUs: number;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{`${code}: ${name}`}</CardTitle>
        <CardDescription>{numOfAUs} AUs</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
}
