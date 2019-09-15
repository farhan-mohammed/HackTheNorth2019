#!/usr/bin/env python
# coding: utf-8

# In[1]:


# %config IPCompleter.greedy=True


# In[2]:

import os
from os import path
import gspread
from oauth2client.service_account import ServiceAccountCredentials
import pandas as pd
import numpy as np
import summarizer
from summarizer import SingleModel
import struct
import re
import nltk
import heapq
import json

# use creds to create a client to interact with the Google Drive API
scope = ['https://spreadsheets.google.com/feeds', 'https://www.googleapis.com/auth/drive']
creds = ServiceAccountCredentials.from_json_keyfile_name('client_secret.json', scope)
client = gspread.authorize(creds)


# In[3]:


sheets = ["Subjective", "Objective", "Assessment", "Plan"]


# In[4]:


df = pd.DataFrame(columns=["type", "text", "summary"])


# In[5]:


df["summary"] = ""


# In[6]:


for s in sheets:
    i = len(df)
    sheet = client.open(s).sheet1
    data = sheet.get_all_values()
    text = data[1][0]
    df.at[i, "type"] = s
    df.at[i, "text"] = text


# In[9]:


#clean data
def cleandata(s):
    s = re.sub(r'\[[0-9]*\]', ' ', s)
    s = re.sub(r'\s+', ' ', s)
#     s = re.sub('[^a-zA-Z]', ' ', s )
#     s = re.sub(r'\s+', ' ', s)
    return s

def summarize(s):
    sentence_list = nltk.sent_tokenize(s)
    stopwords = nltk.corpus.stopwords.words('english')
    
    word_frequencies = {}
    for word in nltk.word_tokenize(s):
        if word not in stopwords:
            if word not in word_frequencies.keys():
                word_frequencies[word] = 1
            else:
                word_frequencies[word] += 1
                
    #divide all 
    maximum_frequncy = max(word_frequencies.values())
    for word in word_frequencies.keys():
        word_frequencies[word] = (word_frequencies[word]/maximum_frequncy)

    sentence_scores = {}
    for sent in sentence_list:
        for word in nltk.word_tokenize(sent.lower()):
            if word in word_frequencies.keys():
                if len(sent.split(' ')) < 30:
                    if sent not in sentence_scores.keys():
                        sentence_scores[sent] = word_frequencies[word]
                    else:
                        sentence_scores[sent] += word_frequencies[word]
        
    summary_sentences = heapq.nlargest(3, sentence_scores, key=sentence_scores.get)
    summary = ' '.join(summary_sentences)
    return summary
    
cleandata = np.vectorize(cleandata)
summarize = np.vectorize(summarize)

df["text"] = cleandata(df["text"])
df["summary"] = summarize(df["text"])

<<<<<<< HEAD:hackthenorth.py
for x in df['summary']:
    print(x)

import firebase_admin
from firebase_admin import credentials
from firebase_admin import db

# Fetch the service account key JSON file contents
cred = credentials.Certificate('fbkey.json')

# Initialize the app with a service account, granting admin privileges
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://hack-the-north-82cca.firebaseio.com/'
})

# As an admin, the app has access to read and write all data, regradless of Security Rules

ref = db.reference('/')

soapref = ref.child('note')
soapref.set({
    df.at[0,"type"] : df.at[0,"summary"],
    df.at[1,"type"] : df.at[1,"summary"],
    df.at[2,"type"] : df.at[2,"summary"],
    df.at[3,"type"] : df.at[3,"summary"],
})
=======
if path.exists("src/summarized.json"):
    os.remove("src/summarized.json")
for x in df["summary"]:
    text = text + x
with open('src/summarized.json', 'w+') as file:
    data = {}
    data["summary"] = text
    json.dump(data, file)

>>>>>>> 2160d30adc7736f383520b86d9bb13cb6e6fca71:summarize_text.py
