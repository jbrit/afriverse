import { receiveCoin } from "$utils/verifysbt";
import { Card, Text, Button, Row, Grid } from "@nextui-org/react";
import { ethers } from "ethers";
import { useAccount, useProvider, useSigner } from "wagmi";

interface LessonCardProps {
  title: string;
  description: string;
  lessonScore: number;
}

export default function LessonCard({
  title,
  description,
  lessonScore,
}: LessonCardProps) {
  const signer = useSigner();
  const o = useProvider();
  const provider = signer.data ?? o;
  const { address } = useAccount();

  return (
    <Grid sm={12} md={5}>
      <Card css={{ mw: "330px" }}>
        <Card.Header>
          <Text b>{title}</Text>
        </Card.Header>
        <Card.Divider />
        <Card.Body css={{ py: "$10" }}>
          <Text>{description}</Text>
        </Card.Body>
        <Card.Divider />
        <Card.Footer>
          <Row justify="flex-end">
            <Button size="sm" light>
              View Lesson
            </Button>
            <Button
              onClick={() => {
                receiveCoin(
                  provider,
                  address!,
                  ethers.utils.parseEther("" + lessonScore)
                );
              }}
              size="sm"
              color="secondary"
            >
              Claim {lessonScore} AFET
            </Button>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
}
