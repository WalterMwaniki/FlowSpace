"use client";

import { useEffect, useState } from "react";
import { TinyliciousClient } from "@fluidframework/tinylicious-client";
import { ConnectionState, ContainerSchema, IFluidContainer, SharedString } from "fluid-framework";
import { SharedStringHelper } from "@fluid-experimental/react-inputs";
import { CollaborativeTextArea } from "./CollaborativeTextArea";

const useSharedString = (): SharedString => {
    const [sharedString, setSharedString] = useState<SharedString>();
    const getFluidData = async () => {
        const client = new TinyliciousClient();
        const containerSchema: ContainerSchema = {
            initialObjects: { sharedString: SharedString }
        };
        let container: IFluidContainer;
        const containerId = window.location.hash.substring(1);
        if (!containerId) {
            ({ container } = await client.createContainer(containerSchema));
            const id = await container.attach();
            window.location.hash = id;
            return container.initialObjects.sharedString as SharedString;
        }
        ({ container } = await client.getContainer(containerId, containerSchema));
        if (container.connectionState !== ConnectionState.Connected) {
            await new Promise<void>((resolve) => {
                container.once("connected", () => {
                    resolve();
                })
            });
        }
        return container.initialObjects.sharedString as SharedString;
    }

    useEffect(() => {
        getFluidData().then((sharedString) => {
            setSharedString(sharedString);
        });
    }, []);

    return sharedString as SharedString;
}

export const CollaborativeText = (): JSX.Element => {
    const sharedString = useSharedString();

    if (sharedString) {
        return (
            <div>
                <h1>Collabrative Text</h1>
                <CollaborativeTextArea sharedStringHelper={new SharedStringHelper(sharedString)} />
            </div>
        );
    } else {
        return (
            <div>
                <h1>Collabrative Text</h1>
            </div>
        );
    }
}