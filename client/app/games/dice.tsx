'use client'

import { TinyliciousClient } from "@fluidframework/tinylicious-client";
import { SharedMap } from "@fluidframework/map";
import { ContainerSchema } from "fluid-framework";
import { useEffect, useState } from "react";

const client = new TinyliciousClient();

export const diceValueKey = "diceValueKey";

const containerSchema: ContainerSchema = {
    initialObjects: { diceMap: SharedMap }
};

const getFluidData = async () => {
    let container;
    const id = location.hash.substring(1);
    if (!id) {
        ({ container } = await client.createContainer(containerSchema));
        const id = await container.attach();
        location.hash = id;
    }
    else {
        ({ container } = await client.getContainer(id, containerSchema));
    }
    return container.initialObjects.diceMap;
}
export const Dice = (): JSX.Element => {
    const [diceMap, setDiceMap] = useState<SharedMap | undefined>(undefined);

  return (
    <div>
      <h1>Dice</h1>
      <p>This is the Dice component.</p>
    </div>
  );
}