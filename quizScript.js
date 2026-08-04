import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyDxuJ7q92sU52prV_ji-Be38OE0p4MX84E");

// Expose function globally so HTML can call it
window.generateQuiz = async function() {
    const topic = document.getElementById("topic").value;
    const quizBox = document.getElementById("quiz");

    if (!topic) {
        quizBox.innerText = "Please enter a topic!";
        return;
    }

    quizBox.innerHTML = "Generating quiz... please wait.";

    try {
        const model = genAI.getGenerativeModel({ model: "models/gemini-2.5-flash" });


        const prompt = `
        Generate 25 multiple-choice quiz questions about "${topic}".
        Format exactly like this:
        1) Question?
        A) Option 1
        B) Option 2
        C) Option 3
        D) Option 4
        Correct answer: X
        `;

        const result = await model.generateContent(prompt);

        const output = result.response.text();
        quizBox.innerText = output || "No questions generated. Try a different topic.";
        console.log(result); // debug output
    } catch (err) {
        console.error(err);
        quizBox.innerText = "Error generating quiz. Check console for details.";
    }
};

// Attach to button
document.getElementById("startQuizButton").addEventListener("click", window.generateQuiz);
