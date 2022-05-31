import { useEffect, useState } from "react";
import { Container} from "react-bootstrap";
import axios from "axios";
import styled from "styled-components";
import { Card, Button } from "react-bootstrap";
import { readBuilderProgram } from "typescript";

const CardsContainer = styled.div`
display: flex;
height: 75vh;
align-items: center;
justify-content: center;
`;

const CardHeader = styled.div`
height: 30rem;
background-color: blue;
display: flex;
align-items: center;
justify-content: center;
`;

const PriceCircle = styled.div`
border: 0.5rem solid #ffffff;
width: 12.5rem;
height: 12.5rem;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
box-shadow: 0.1rem 0.1rem 1rem rgba(19, 20, 19, 0.342);
`;

const PriceText = styled.p`
font-size: 3rem;
color: #ffffff;
box-shadow: 0.1rem 0.1rem 1rem rgba(19, 20, 19, 0.342);

`

const MembershipPlan = () => {

    const [prices, setPrices] = useState<any[]>([])

    useEffect(() => {
        fetchPrices();
    }, []);

    const fetchPrices = async () => {

        const {data: response} = await axios.get("http://localhost:8080/subs/prices");
        console.log(response);
        setPrices(response.data);
    };

    const createSession = async (priceId: string) => {
        const { data: response } = await axios.post(
            "http://localhost:8080/subs/session", 
            {
                priceId,
            }
        );

        window.location.href = response.url;
    };

    return <Container>
        <CardsContainer>
            {prices.map((price: any) => {
                return (
                    <Card style={{width: "25%", height: "75%", marginRight: "2rem"}}>
                        <CardHeader style={{backgroundColor: "#273746 "}}>
                            <PriceCircle>
                                <PriceText>
                                ${price.unit_amount / 100}
                                </PriceText>
                            </PriceCircle>
                        </CardHeader>
                        <Card.Body>
                            <Card.Title style={{fontSize: "2rem"}}>
                                {price.nickname}
                            </Card.Title>
                            <Button variant="primary" className="mt-1" style={{backgroundColor: "#273746 "}} onClick={() => createSession(price.id)}>
                                Purchase Now
                            </Button>
                        </Card.Body>
                    </Card>
                )
            })}
        </CardsContainer>
    </Container>
};

export default MembershipPlan;