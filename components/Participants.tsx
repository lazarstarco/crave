import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import ParticipantItem from "./ParticipantItem";
import toast from "react-hot-toast";

const Participants: React.FC = () => {
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [currentProductTab, setCurrentProductTab] = useState<number>(2);
  const { data: session } = useSession();

  useEffect(() => {
    async function fetchParticipants() {
      const response = await fetch("/api/participants");
      const data = await response.json();
      setParticipants(data);
    }
    fetchParticipants();
  }, []);

  const handleVote = async (participantId: string) => {
    try {
      const response = await fetch(`/api/vote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ participantId }),
      });

      const result = await response.json();
      if (result.success) {
        setParticipants((prevParticipants) =>
          prevParticipants.map((participant) =>
            participant.id === participantId
              ? { ...participant, votes: participant.votes + 1 }
              : participant,
          ),
        );
      } else {
        toast.error(`Failed to vote: ${result.message}`);
      }
    } catch (error) {
      toast.error(`Error during voting: ${error}`);
    }
  };

  return (
    <div>
      {currentProductTab === 2 && (
        <div>
          {participants.length > 0 ? (
            participants.map((participant: Participant) => (
              <ParticipantItem
                key={participant.id}
                participant={participant}
                onVote={() => handleVote(participant.id)}
                isSelf={session?.user?.id === participant.id}
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
  );
};

export default Participants;
