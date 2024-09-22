import { useSession } from "next-auth/react";
import Image from "next/image";
import { FC, useState } from "react";

interface ParticipantProps {
  participant: Participant;
  onVote: () => void;
  isSelf: boolean;
}

const ParticipantItem: FC<ParticipantProps> = ({
  participant,
  onVote,
  isSelf,
}) => {
  const { data: session } = useSession();
  const [hasVoted, setHasVoted] = useState(false);

  const handleVote = async () => {
    await onVote();
    setHasVoted(true);
  };

  const color = "white";
  return (
    <div className="flex flex-col items-center gap-y-2 p-2 border-2 border-white rounded-3xl w-3/4 h-full">
      <Image
        src={
          participant?.mainImage
            ? `/${participant?.mainImage}`
            : "/product_placeholder.jpg"
        }
        width={500}
        height={500}
        alt="main image"
        className="w-auto h-auto"
      />
      <p className="text-2xl text-black font-semibold mt-3">
        {participant.user.email.split("@")[0]}
      </p>
      <p className="text-lg text-black font-semibold mt-auto">
        Votes: {participant.votes}
      </p>
      {session ? (
        <button
          onClick={handleVote}
          disabled={isSelf || hasVoted}
          className={`w-full font-bold py-2 px-4 rounded-lg transition ${
            isSelf || hasVoted
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-slate-950 text-white hover:bg-blue-600"
          }`}
        >
          {isSelf
            ? "You can't vote for yourself"
            : hasVoted
              ? "Thank you for voting"
              : "Vote"}
        </button>
      ) : (
        <p className="text-sm text-gray-600 mt-3">Please login to vote</p>
      )}
    </div>
  );
};

export default ParticipantItem;
