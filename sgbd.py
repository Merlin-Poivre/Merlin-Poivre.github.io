from psycopg2 import *

# Chaine de connexion à la base de données
chaineConnexion = "dbname=series user=etu port=5434 password=toto"

# Fonction générique
def getData(requete, params=[]):
    with connect(chaineConnexion) as connexion:
        curseur = connexion.cursor()
        curseur.execute(requete, params)
        rows = curseur.fetchall()
    return rows

# Liste de tous les genres de séries
def genres():
    return getData("select idg, name from genre order by name")

# Liste de toutes les séries du genre dont l'identifiant est en paramètre
def seriesParGenre(idg):
    requete = """	select 	s.title as titre, 
							count(e.ide) as nombre, 
							round(avg(e.average),1) as note
					from serie s
						join appartient a on a.ids = s.ids 
						join episode e on e.ids = s.ids
					where a.idg = %s
					group by titre
					order by titre """
    return getData(requete, [idg])