"use client";

import React, { useState, useEffect } from "react";
import { formatCategoryName } from "@/utils/categoryFormating";
import ParticipantItem from "./ParticipantItem";
import { useSession } from "next-auth/react";

const ProductTabs = ({ product }: { product: Product }) => {
  const [currentProductTab, setCurrentProductTab] = useState<number>(0);
  const [participants, setParticipants] = useState<Participant[]>([]);

  const { data: session, status: sessionStatus } = useSession();

  const fetchParticipants = async (id: string) => {
    try {
      const response = await fetch(
        `http://ec2-3-79-230-202.eu-central-1.compute.amazonaws.com:3001/api/participants?productId=${id}`,
      );
      const data = await response.json();
      setParticipants(data);
    } catch (error) {
      console.error("Error fetching participants:", error);
    }
  };

  useEffect(() => {
    if (product?.id) {
      fetchParticipants(product.id);
    }
  }, [product?.id]);

  const handleVote = async (participantId: string) => {
    try {
      const response = await fetch("http://ec2-3-79-230-202.eu-central-1.compute.amazonaws.com:3001/api/participants", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ participantId }),
      });

      if (response.ok) {
        fetchParticipants(product.id);
      }
    } catch (error) {
      console.error("Error voting for participant:", error);
    }
  };

  return (
    <div className="px-5 text-black">
      <div role="tablist" className="tabs tabs-bordered">
        <a
          role="tab"
          className={`tab text-lg text-black pb-8 max-[500px]:text-base max-[400px]:text-sm max-[370px]:text-xs ${
            currentProductTab === 0 && "tab-active"
          }`}
          onClick={() => setCurrentProductTab(0)}
        >
          Description
        </a>
        <a
          role="tab"
          className={`tab text-black text-lg pb-8 max-[500px]:text-base max-[400px]:text-sm max-[370px]:text-xs ${
            currentProductTab === 1 && "tab-active"
          }`}
          onClick={() => setCurrentProductTab(1)}
        >
          Additional info
        </a>
        <a
          role="tab"
          className={`tab text-black text-lg pb-8 max-[500px]:text-base max-[400px]:text-sm max-[370px]:text-xs ${
            currentProductTab === 2 && "tab-active"
          }`}
          onClick={() => setCurrentProductTab(2)}
        >
          Vote
        </a>
      </div>
      <div className="pt-5">
        {currentProductTab === 0 && (
          <p className="text-lg max-sm:text-base max-sm:text-sm">
            {product?.description}
          </p>
        )}

        {currentProductTab === 1 && (
          <div className="overflow-x-auto">
            <table className="table text-xl text-center max-[500px]:text-base">
              <tbody>
                <tr>
                  <th>Manufacturer:</th>
                  <td>{product?.manufacturer}</td>
                </tr>
                <tr>
                  <th>Category:</th>
                  <td>
                    {product?.category?.name
                      ? formatCategoryName(product?.category?.name)
                      : "No category"}
                  </td>
                </tr>
                <tr>
                  <th>Color:</th>
                  <td>Silver, LightSlateGray, Blue</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {currentProductTab === 2 && (
          <div className="grid grid-cols-3 justify-items-center gap-x-2 gap-y-5 max-[1300px]:grid-cols-3 max-lg:grid-cols-2 max-[500px]:grid-cols-1">
            {participants?.length > 0 ? (
              participants.map((participant: Participant) => (
                <ParticipantItem
                  key={participant.id}
                  participant={participant}
                  onVote={() => handleVote(participant.id)}
                  isSelf={session?.user?.id === participant.user.id}
                />
              ))
            ) : (
              <h3 className="text-3xl mt-5 text-center w-full col-span-full max-[1000px]:text-2xl max-[500px]:text-lg">
                No participants found for specified query
              </h3>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;
