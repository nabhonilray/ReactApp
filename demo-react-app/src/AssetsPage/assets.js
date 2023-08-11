import * as React from "react";
import { Card, CardHeader, CardTitle, CardBody, CardActions, CardImage } from '@progress/kendo-react-layout';
import {assetsData} from "../assets/assetsData";
import '../AssetsPage/assets.css';
import { Button } from "@progress/kendo-react-buttons";

function Assets() {
    let indents = [];
    assetsData.forEach(element => {
        indents.push(
            <div className="cards">
                <Card>
                    <CardImage src={element.assetImage} />
                    <div>
                        <CardHeader>
                            <CardTitle><h3 style={{
                                fontSize: "medium",
                                fontWeight: "500"
                            }}>{element.assetName}</h3></CardTitle>
                        </CardHeader>
                        <CardBody>
                            <div style={{display:"flex", justifyContent: "space-between"}}>
                            <div>
                                <p>Main Usage Type:</p>
                                <p>Area:</p>
                                <p>Annual Total Income:</p>
                                <p>Occupancy Rate:</p>
                                <p>Annual Rental Income/ m<sup>2</sup>:</p>
                                <p>Value:</p>
                            </div>
                            <div>
                                <p>{element.usageType}</p>
                                <p>{element.area}</p>
                                <p>{element.annualIncome}</p>
                                <p>{element.occupancyRate}</p>
                                <p>{element.annualRental}</p>
                                <p>{element.value}</p>
                            </div>
                            </div>
                        </CardBody>
                        <CardActions layout="stretched">
                            <span className="k-button k-button-md k-rounded-md k-button-flat k-button-flat-primary">
                                <i class="fa fa-pencil fa-lg" aria-hidden="true"></i>
                            </span>
                            <span className="k-button k-button-md k-rounded-md k-button-flat k-button-flat-primary">
                                <i class="fa fa-trash-o fa-lg" aria-hidden="true"></i>
                            </span>
                        </CardActions>
                    </div>
                </Card>
            </div>);
    })

    return (
        <>
        <div className="add-button"> 
            <Button iconClass="fa fa-plus fa-fw">Add New Asset</Button>
        </div>
        <div className="flex-container">
            {indents}
        </div>
        </>
    );
};

export default Assets;