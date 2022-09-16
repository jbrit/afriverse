import { Card, Text, Button, Row, Grid } from "@nextui-org/react";

interface LessonCardProps {
    title: string;
    description: string;
    lessonScore: number;
}

export default function LessonCard({title, description, lessonScore} : LessonCardProps) {
  return (
    <Grid sm={12} md={5}>
      <Card css={{ mw: "330px" }}>
        <Card.Header>
          <Text b>{title}</Text>
        </Card.Header>
        <Card.Divider />
        <Card.Body css={{ py: "$10" }}>
          <Text>
            {description}
          </Text>
        </Card.Body>
        <Card.Divider />
        <Card.Footer>
          <Row justify="flex-end">
            <Button size="sm" light>
              View Lesson
            </Button>
            <Button size="sm" color="secondary">
              Claim {lessonScore} AFET
            </Button>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
}
