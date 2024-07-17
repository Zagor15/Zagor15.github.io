function analyzeSentiment() {
    const userInput = document.getElementById('userInput').value;
    
    // Example using Vader sentiment analysis (assuming you have the library imported)
    const analyzer = new SentimentIntensityAnalyzer();
    const sentimentScore = analyzer.polarity_scores(userInput);
    
    let sentimentResult;
    if (sentimentScore.compound >= 0.05) {
        sentimentResult = "Positive";
    } else if (sentimentScore.compound <= -0.05) {
        sentimentResult = "Negative";
    } else {
        sentimentResult = "Neutral";
    }
    
    document.getElementById('result').innerText = `Sentiment: ${sentimentResult}`;
}
