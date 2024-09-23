"use client";
import { nanoid } from "nanoid";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const DashboardProductTable = () => {
  const [participants, setParticipants] = useState<Participant[]>([]);

  useEffect(() => {
    fetch("http://ec2-3-79-230-202.eu-central-1.compute.amazonaws.com:3001/api/participants", { cache: "no-store" })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        data = data.sort((a: Participant, b: Participant) => b.votes - a.votes);
        setParticipants(data);
      });
  }, []);

  return (
    <div className="w-full">
      <h1 className="text-3xl font-semibold text-center mb-5">
        All participants
      </h1>

      <div className="xl:ml-5 w-full max-xl:mt-5 overflow-auto w-full h-[80vh]">
        <table className="table table-md table-pin-cols">
          <thead>
            <tr>
              <th>Image</th>
              <th>Posted by</th>
              <th>Votes</th>
            </tr>
          </thead>
          <tbody>
            {participants &&
              participants.map((participant) => (
                <tr key={nanoid()}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <Image
                            width={48}
                            height={48}
                            src={
                              participant.product?.mainImage
                                ? `/${participant.product?.mainImage}`
                                : "/product_placeholder.jpg"
                            }
                            alt="Avatar Tailwind CSS Component"
                            className="w-auto h-auto"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>
                      <div>
                        <div className="font-bold">
                          {participant.user.email.split("@")[0]}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{participant.votes} votes</td>
                </tr>
              ))}
          </tbody>
          <tfoot>
            <tr>
              <th>Image</th>
              <th>Posted by</th>
              <th>Votes</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default DashboardProductTable;
