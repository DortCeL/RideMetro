"use client"
import { useState } from "react";
import complain from "@/assets/complain.jpg";

const complaints = [
    {
        id: 1,
        title: "Billing Issue",
        date: "2025-02-25",
        status: "Resolved",
        details: "I recently purchased a monthly MRT pass through the online portal, but I was charged twice for the same transaction. The payment was deducted twice from my account, but I only received one pass. I reached out to customer service, but it’s been over a week, and I haven’t received a refund or any update. This has caused financial inconvenience, and I’m worried it might happen again in the future. I kindly request a prompt resolution and a refund for the extra charge."
    },
    {
        id: 2,
        title: "Service Issue",
        date: "2025-02-26",
        status: "Pending",
        details: "I’ve noticed that the metro trains on my route frequently don’t follow the published schedule, especially during peak hours. Trains that are supposed to arrive every 5 minutes sometimes take 15–20 minutes, causing overcrowding on the platforms. There are also instances where the first and last train timings change without prior notice. This makes it difficult to plan my commute, and I often end up late for work. It would be really helpful if the train timings could be more consistent, or at least if delays were communicated in real time"
    }
];

export default function ComplaintHistory() {
    const [expandedId, setExpandedId] = useState(null);

    const toggleDetails = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div
            className="min-h-screen bg-cover bg-center p-6"
            style={{
              backgroundImage: `url(${complain.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
            }}
        >
                <div className="complain_container mt-10">
                    <p className="complain_dashboard text-cyan-50">Complaint History</p>
                </div>
            <div className="space-y-4">
                {complaints.map((complaint) => (
                    <div
                        key={complaint.id}
                        className="w-full p-3 rounded-lg bg-black bg-opacity-50 border border-gray-600 hover:border-white hover:ring-1 hover:ring-white outline-none text-white shadow-md transition duration-300 graph_heading "
                        onClick={() => toggleDetails(complaint.id)}
                    >
                        <div className="flex justify-between items-center">
                            <div>
                                <h2 className="text-3xl font-semibold">{complaint.title}</h2>
                                <p className="text-cyan-600">Date: {complaint.date}</p>
                            </div>
                            <span
                                className={`px-3 py-1 rounded-full text-sm font-medium ${
                                    complaint.status === "Resolved"
                                        ? "bg-green-200 text-green-800"
                                        : "bg-yellow-200 text-yellow-800"
                                }`}
                            >
                                {complaint.status}
                            </span>
                        </div>

                        {expandedId === complaint.id && (
                            <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                                <h3 className="text-2xl text-black font-medium mb-2 graph_heading">Complaint Details:</h3>
                                <p className="text-gray-700">{complaint.details}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
