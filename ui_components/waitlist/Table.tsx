"use client";
import React from "react";
import { useSidebarOpen } from "../../store/useSidebarOpen";
import Image from "next/image";
import { icons } from "../../utils/icons";

const data = [
  {
    id: 1,
    createdOn: "Sat, 06 Jan 2024",
    payer: "John Doe",
    status: "Active",
    email: "john.doe@example.com",
    payerPhone: "+91 123 456 7890",
    service: "Private Language Session",
    scheduled: "Sat, 06 Jan 2024",
  },
  {
    id: 2,
    createdOn: "Sat, 06 Jan 2024",
    payer: "Jane Smith",
    status: "Lead",
    email: "jane.smith@example.com",
    payerPhone: "+91 234 567 8901",
    service: "Fitness Session",
    scheduled: "Sat, 06 Jan 2024",
  },
  {
    id: 3,
    createdOn: "Sat, 06 Jan 2024",
    payer: "Bob Johnson",
    status: "Inactive",
    email: "bob.johnson@example.com",
    payerPhone: "+91 345 678 9012",
    service: "Boxing Session",
    scheduled: "Sat, 06 Jan 2024",
  },
  {
    id: 4,
    createdOn: "Sat, 06 Jan 2024",
    payer: "Alice Brown",
    status: "Lead",
    email: "alice.brown@example.com",
    payerPhone: "+91 456 789 0123",
    service: "Swim beginner for class new Session",
    scheduled: "Sat, 06 Jan 2024",
  },
  {
    id: 5,
    createdOn: "Sat, 06 Jan 2024",
    payer: "Eve Wilson",
    status: "Active",
    email: "eve.wilson@example.com",
    payerPhone: "+91 567 890 1234",
    service: "Private Language Session",
    scheduled: "Sat, 06 Jan 2024",
  },
  {
    id: 6,
    createdOn: "Sat, 06 Jan 2024",
    payer: "Charlie Davis",
    status: "Lead",
    email: "charlie.davis@example.com",
    payerPhone: "+91 678 901 2345",
    service: "Fitness Session",
    scheduled: "Sat, 06 Jan 2024",
  },
  {
    id: 7,
    createdOn: "Sat, 06 Jan 2024",
    payer: "Grace Lee",
    status: "Active",
    email: "grace.lee@example.com",
    payerPhone: "+91 789 012 3456",
    service: "Boxing Session",
    scheduled: "Sat, 06 Jan 2024",
  },
  {
    id: 8,
    createdOn: "Sat, 06 Jan 2024",
    payer: "Frank White",
    status: "Inactive",
    email: "frank.white@example.com",
    payerPhone: "+91 890 123 4567",
    service: "Swim beginner for class new Session",
    scheduled: "Sat, 06 Jan 2024",
  },
  {
    id: 9,
    createdOn: "Sat, 06 Jan 2024",
    payer: "Hannah Martinez",
    status: "Lead",
    email: "hannah.martinez@example.com",
    payerPhone: "+91 901 234 5678",
    service: "Private Language Session",
    scheduled: "Sat, 06 Jan 2024",
  },
  {
    id: 10,
    createdOn: "Sat, 06 Jan 2024",
    payer: "Isaac Rodriguez",
    status: "Active",
    email: "isaac.rodriguez@example.com",
    payerPhone: "+91 012 345 6789",
    service: "Fitness Session",
    scheduled: "Sat, 06 Jan 2024",
  },
  //   {
  //     id: 11,
  //     createdOn: "Sun, 07 Jan 2024",
  //     payer: "Emma Johnson",
  //     status: "Active",
  //     email: "emma.johnson@example.com",
  //     payerPhone: "+91 123 456 7890",
  //     service: "Private Language Session",
  //     scheduled: "Sun, 07 Jan 2024",
  //   },
  //   {
  //     id: 12,
  //     createdOn: "Sun, 07 Jan 2024",
  //     payer: "James Brown",
  //     status: "Lead",
  //     email: "james.brown@example.com",
  //     payerPhone: "+91 234 567 8901",
  //     service: "Fitness Session",
  //     scheduled: "Sun, 07 Jan 2024",
  //   },
  //   {
  //     id: 13,
  //     createdOn: "Sun, 07 Jan 2024",
  //     payer: "Olivia Smith",
  //     status: "Inactive",
  //     email: "olivia.smith@example.com",
  //     payerPhone: "+91 345 678 9012",
  //     service: "Boxing Session",
  //     scheduled: "Sun, 07 Jan 2024",
  //   },
  //   {
  //     id: 14,
  //     createdOn: "Sun, 07 Jan 2024",
  //     payer: "Noah Wilson",
  //     status: "Lead",
  //     email: "noah.wilson@example.com",
  //     payerPhone: "+91 456 789 0123",
  //     service: "Swim beginner for class new Session",
  //     scheduled: "Sun, 07 Jan 2024",
  //   },
  //   {
  //     id: 15,
  //     createdOn: "Sun, 07 Jan 2024",
  //     payer: "Sophia Lee",
  //     status: "Active",
  //     email: "sophia.lee@example.com",
  //     payerPhone: "+91 567 890 1234",
  //     service: "Private Language Session",
  //     scheduled: "Sun, 07 Jan 2024",
  //   },
  //   {
  //     id: 16,
  //     createdOn: "Sun, 07 Jan 2024",
  //     payer: "William Davis",
  //     status: "Lead",
  //     email: "william.davis@example.com",
  //     payerPhone: "+91 678 901 2345",
  //     service: "Fitness Session",
  //     scheduled: "Sun, 07 Jan 2024",
  //   },
  //   {
  //     id: 17,
  //     createdOn: "Sun, 07 Jan 2024",
  //     payer: "Amelia Martinez",
  //     status: "Active",
  //     email: "amelia.martinez@example.com",
  //     payerPhone: "+91 789 012 3456",
  //     service: "Boxing Session",
  //     scheduled: "Sun, 07 Jan 2024",
  //   },
  //   {
  //     id: 18,
  //     createdOn: "Sun, 07 Jan 2024",
  //     payer: "Liam White",
  //     status: "Inactive",
  //     email: "liam.white@example.com",
  //     payerPhone: "+91 890 123 4567",
  //     service: "Swim beginner for class new Session",
  //     scheduled: "Sun, 07 Jan 2024",
  //   },
  //   {
  //     id: 19,
  //     createdOn: "Sun, 07 Jan 2024",
  //     payer: "Ava Johnson",
  //     status: "Lead",
  //     email: "ava.johnson@example.com",
  //     payerPhone: "+91 901 234 5678",
  //     service: "Private Language Session",
  //     scheduled: "Sun, 07 Jan 2024",
  //   },
  //   {
  //     id: 20,
  //     createdOn: "Sun, 07 Jan 2024",
  //     payer: "Logan Rodriguez",
  //     status: "Active",
  //     email: "logan.rodriguez@example.com",
  //     payerPhone: "+91 012 345 6789",
  //     service: "Fitness Session",
  //     scheduled: "Sun, 07 Jan 2024",
  //   },
  //   {
  //     id: 21,
  //     createdOn: "Mon, 08 Jan 2024",
  //     payer: "Oliver Smith",
  //     status: "Active",
  //     email: "oliver.smith@example.com",
  //     payerPhone: "+91 123 456 7890",
  //     service: "Private Language Session",
  //     scheduled: "Mon, 08 Jan 2024",
  //   },
  //   {
  //     id: 22,
  //     createdOn: "Mon, 08 Jan 2024",
  //     payer: "Sophie Brown",
  //     status: "Lead",
  //     email: "sophie.brown@example.com",
  //     payerPhone: "+91 234 567 8901",
  //     service: "Fitness Session",
  //     scheduled: "Mon, 08 Jan 2024",
  //   },
  //   {
  //     id: 23,
  //     createdOn: "Mon, 08 Jan 2024",
  //     payer: "Lucas Wilson",
  //     status: "Inactive",
  //     email: "lucas.wilson@example.com",
  //     payerPhone: "+91 345 678 9012",
  //     service: "Boxing Session",
  //     scheduled: "Mon, 08 Jan 2024",
  //   },
  //   {
  //     id: 24,
  //     createdOn: "Mon, 08 Jan 2024",
  //     payer: "Emily Johnson",
  //     status: "Lead",
  //     email: "emily.johnson@example.com",
  //     payerPhone: "+91 456 789 0123",
  //     service: "Swim beginner for class new Session",
  //     scheduled: "Mon, 08 Jan 2024",
  //   },
  //   {
  //     id: 25,
  //     createdOn: "Mon, 08 Jan 2024",
  //     payer: "Daniel Lee",
  //     status: "Active",
  //     email: "daniel.lee@example.com",
  //     payerPhone: "+91 567 890 1234",
  //     service: "Private Language Session",
  //     scheduled: "Mon, 08 Jan 2024",
  //   },
  //   {
  //     id: 26,
  //     createdOn: "Mon, 08 Jan 2024",
  //     payer: "Mia Davis",
  //     status: "Lead",
  //     email: "mia.davis@example.com",
  //     payerPhone: "+91 678 901 2345",
  //     service: "Fitness Session",
  //     scheduled: "Mon, 08 Jan 2024",
  //   },
  //   {
  //     id: 27,
  //     createdOn: "Mon, 08 Jan 2024",
  //     payer: "Jack Martinez",
  //     status: "Active",
  //     email: "jack.martinez@example.com",
  //     payerPhone: "+91 789 012 3456",
  //     service: "Boxing Session",
  //     scheduled: "Mon, 08 Jan",
  //   },
];

export const Table = () => {
  const { sidebarOpen } = useSidebarOpen();
  return (
    <div
      className={`overflow-auto h-[] border rounded-md border-blueGray100 relative px-5 custom-scrollbar ${
        sidebarOpen ? "w-[calc(100vw-280px)]" : "w-[calc(100vw-120px)]"
      }`}
    >
      <div className="min-w-max w-max ">
        <div className="grid grid-cols-7 gap-x-4 overflow-x-auto border-b border-blueGray100 py-2.5">
          <div className="flex items-center gap-1.5">
            <Image src={icons.calendarOutlined} alt="calender_outlined" />
            <p className="detail_medium text-slateGray">Created On</p>
          </div>
          <div className="flex items-center gap-1.5">
            <Image src={icons.user} alt="user" />
            <p className="detail_medium text-slateGray">Payer</p>
          </div>
          <div className="flex items-center gap-1.5">
            <Image src={icons.circleDot} alt="circleDot" />
            <p className="detail_medium text-slateGray">Status</p>
          </div>
          <div className="flex items-center">
            <p className="detail_medium text-slateGray"># Email</p>
          </div>
          <div className="flex items-center">
            <p className="detail_medium text-slateGray"># Payer Phone</p>
          </div>
          <div className="flex items-center">
            <p className="detail_medium text-slateGray"># Service</p>
          </div>
          <div className="flex items-center gap-1.5">
            <Image src={icons.calendarOutlined} alt="calender_outlined" />
            <p className="detail_medium text-slateGray">Scheduled</p>
          </div>
        </div>
        {data.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-7 gap-x-4 overflow-x-auto border-b border-b-blueGray100 py-2.5"
          >
            <div className="tableContent">
              <p className="detail_medium text-tableContentText">
                {item.createdOn}
              </p>
            </div>
            <div className="tableContent">
              <p className="detail_medium text-tableContentText">
                {item.payer}
              </p>
            </div>
            <div className="tableContent">
              <p className="detail_medium text-tableContentText">
                {item.status}
              </p>
            </div>
            <div className="tableContent">
              <p className="detail_medium text-tableContentText">
                {item.email}
              </p>
            </div>
            <div className="tableContent">
              <p className="detail_medium text-tableContentText">
                {item.payerPhone}
              </p>
            </div>
            <div className="tableContent">
              <p className="detail_medium text-tableContentText">
                {item.service}
              </p>
            </div>
            <div className="tableContent">
              <p className="detail_medium text-tableContentText">
                {item.scheduled}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
